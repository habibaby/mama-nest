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
