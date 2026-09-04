export type CultureKey = "yoruba" | "igbo" | "hausa" | "edo" | "delta";

export type Culture = {
  key: CultureKey;
  label: string;
  dishes: { name: string; note: string }[];
  ingredients: string[];
  checklist: string[];
};

export const CULTURES: Record<CultureKey, Culture> = {
  yoruba: {
    key: "yoruba",
    label: "Yoruba",
    dishes: [
      { name: "Ọbẹ̀ Atare", note: "Pepper soup with alligator pepper, black pepper and catfish or bushmeat." },
      { name: "Marugbo", note: "A dark herbal soup with mixed greens." },
      { name: "Ogi", note: "Warm fermented sorghum or maize pap, taken daily." },
    ],
    ingredients: ["Ataare (alligator pepper)", "Iyere (black pepper)", "Eeru (Negro pepper)", "Ogi / pap flour", "Palm oil"],
    checklist: [
      "Stock Yoruba-style spices before your due date",
      "Set up a quiet resting space at home",
      "Prepare comfortable wrappers for gentle support",
      "Note any dietary needs for your care plan",
    ],
  },
  igbo: {
    key: "igbo",
    label: "Igbo",
    dishes: [
      { name: "Ji Mmiri Oku", note: "Spiced yam pepper soup with dried fish or goat meat." },
      { name: "Akamu", note: "Fermented corn pap, taken warm with milk." },
      { name: "Ofe Oha / Ofe Nsala", note: "Light traditional soups with aromatic spices." },
    ],
    ingredients: ["Uda (Negro pepper)", "Uziza (false cubeb)", "Yam", "Dried fish", "Palm oil"],
    checklist: [
      "Stock uda and uziza before your due date",
      "Set up a quiet resting space at home",
      "Prepare comfortable wrappers for gentle support",
      "Note any dietary needs for your care plan",
    ],
  },
  hausa: {
    key: "hausa",
    label: "Hausa",
    dishes: [
      { name: "Kunun Kanwa", note: "Warm sour millet gruel with ginger and cloves." },
      { name: "Kunun Gyada", note: "Groundnut and rice porridge." },
      { name: "Miyan Kuka", note: "Baobab-leaf soup, rich and traditional." },
    ],
    ingredients: ["Kanwa (potash)", "Ginger", "Cloves", "Baobab leaf (kuka) powder", "Groundnut"],
    checklist: [
      "Stock kanwa, ginger and kuka before your due date",
      "Set up a quiet resting space at home",
      "Prepare comfortable wrappers for gentle support",
      "Note any dietary needs for your care plan",
    ],
  },
  edo: {
    key: "edo",
    label: "Edo",
    dishes: [
      { name: "Omobe", note: "Benin black soup with bitterleaf and scent leaf." },
      { name: "Cornmeal gruel", note: "Warm, taken each morning to support recovery." },
      { name: "Medicated pepper soup", note: "Local pods and wild peppers." },
    ],
    ingredients: ["Bitterleaf", "Scent leaf", "Uyayak pods", "Dried fish", "Palm oil"],
    checklist: [
      "Stock bitterleaf and scent leaf before your due date",
      "Set up a quiet resting space at home",
      "Prepare comfortable wrappers for gentle support",
      "Note any dietary needs for your care plan",
    ],
  },
  delta: {
    key: "delta",
    label: "Delta",
    dishes: [
      { name: "Owo Soup & Starch", note: "Palm-oil soup with smoked fish, served with starch." },
      { name: "Evwro", note: "Pepper soup with aidan pod and native spices." },
      { name: "Gbagba Fofo", note: "Okra soup with fresh seafood." },
    ],
    ingredients: ["Aidan pod (Uyayak / Urherhe)", "Palm oil", "Okra", "Smoked fish"],
    checklist: [
      "Stock aidan pod and palm oil before your due date",
      "Set up a quiet resting space at home",
      "Prepare comfortable wrappers for gentle support",
      "Note any dietary needs for your care plan",
    ],
  },
};

export const CULTURE_LIST = Object.values(CULTURES);
