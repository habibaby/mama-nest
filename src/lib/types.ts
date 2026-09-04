export type PregnancyStatus = "pregnant" | "newborn";

export type Kit = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  pricePence: number;
  careKitContents: string[];
  testPanel: string[];
};

export type Pregnancy = {
  id: string;
  status: PregnancyStatus;
  edd: string | null;
  babyDob: string | null;
  isFirstBaby: boolean | null;
  culture?: string | null;
  preferredLanguage?: string | null;
};

export type ServiceType = "care_7" | "care_14" | "care_30" | "custom" | "overnight";

export type BookingStatus =
  | "requested"
  | "birth_activated"
  | "care_scheduled"
  | "care_active"
  | "care_completed"
  | "cancelled";

export type Booking = {
  id: string;
  service: ServiceType;
  addTest: boolean;
  babyBath: boolean;
  dietary: string | null;
  location: string | null;
  notes: string | null;
  status: BookingStatus;
  birthActivatedAt: string | null;
  createdAt: string;
};

export type ShippingAddress = {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
  phone?: string;
};

export type Order = {
  id: string;
  status: "pending_payment" | "paid" | "shipped" | "delivered" | "cancelled";
  amountPence: number;
  createdAt: string;
};
