"use server";

import { createClient } from "@/lib/supabase/server";
import type { ServiceType } from "@/lib/types";

export type BookingInput = {
  status: "pregnant" | "newborn";
  edd?: string;
  babyDob?: string;
  isFirstBaby: boolean;
  culture: string; // CultureKey | "none"
  preferredLanguage?: string;
  service: ServiceType;
  addTest: boolean;
  babyBath: boolean;
  dietary?: string;
  notes?: string;
  fullName: string;
  email: string;
  password: string;
  phone?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
};

/**
 * Books a postpartum care package. Unlike the £99 test kit (real Stripe
 * checkout — see src/app/start/actions.ts), care packages don't have
 * confirmed pricing yet, so this saves a booking *request* and stops —
 * no charge, no invented amount. Mama Nest follows up directly to arrange
 * payment once the package is confirmed.
 */
export async function submitBooking(
  input: BookingInput
): Promise<{ bookingId?: string; error?: string }> {
  const supabase = await createClient();

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: input.email,
    password: input.password,
  });
  if (signUpError || !signUpData.user) {
    return { error: signUpError?.message ?? "We couldn't create your account. Please try again." };
  }
  const userId = signUpData.user.id;

  const { error: profileError } = await supabase.from("profiles").insert({
    id: userId,
    full_name: input.fullName,
    phone: input.phone ?? null,
    address_line1: input.addressLine1,
    address_line2: input.addressLine2 ?? null,
    city: input.city,
    postcode: input.postcode,
  });
  if (profileError) return { error: profileError.message };

  const culture = input.culture === "none" ? null : input.culture;

  const { data: pregnancy, error: pregnancyError } = await supabase
    .from("pregnancies")
    .insert({
      user_id: userId,
      status: input.status,
      edd: input.status === "pregnant" ? input.edd : null,
      baby_dob: input.status === "newborn" ? input.babyDob : null,
      is_first_baby: input.isFirstBaby,
      culture,
      preferred_language: input.preferredLanguage || null,
    })
    .select()
    .single();
  if (pregnancyError || !pregnancy) {
    return { error: pregnancyError?.message ?? "We couldn't save your details." };
  }

  const { data: booking, error: bookingError } = await supabase
    .from("bookings")
    .insert({
      user_id: userId,
      pregnancy_id: pregnancy.id,
      service: input.service,
      add_test: input.addTest,
      baby_bath: input.babyBath,
      dietary: input.dietary || null,
      location: `${input.city}, ${input.postcode}`,
      notes: input.notes || null,
    })
    .select()
    .single();
  if (bookingError || !booking) {
    return { error: bookingError?.message ?? "We couldn't start your booking." };
  }

  return { bookingId: booking.id };
}
