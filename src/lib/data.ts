export type Property = {
  id: string;
  name: string;
  location: string;
  image: string;
  tokenPrice: number;
  apr: number;
  funded: number;
  totalValue: number;
  minInvestment: number;
};

export const properties: Property[] = [
  {
    id: "aurora-heights",
    name: "Aurora Heights",
    location: "Miami, FL",
    image:
      "linear-gradient(135deg, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.15) 60%), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop')",
    tokenPrice: 250,
    apr: 11.4,
    funded: 78,
    totalValue: 4200000,
    minInvestment: 2500,
  },
  {
    id: "meridian-lofts",
    name: "Meridian Lofts",
    location: "Austin, TX",
    image:
      "linear-gradient(135deg, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.15) 60%), url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop')",
    tokenPrice: 180,
    apr: 9.8,
    funded: 54,
    totalValue: 2850000,
    minInvestment: 1800,
  },
  {
    id: "the-obsidian",
    name: "The Obsidian",
    location: "New York, NY",
    image:
      "linear-gradient(135deg, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.15) 60%), url('https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop')",
    tokenPrice: 420,
    apr: 13.2,
    funded: 91,
    totalValue: 9600000,
    minInvestment: 4200,
  },
  {
    id: "solstice-marina",
    name: "Solstice Marina",
    location: "San Diego, CA",
    image:
      "linear-gradient(135deg, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.15) 60%), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop')",
    tokenPrice: 310,
    apr: 10.6,
    funded: 33,
    totalValue: 5100000,
    minInvestment: 3100,
  },
  {
    id: "cedar-&-vine",
    name: "Cedar & Vine",
    location: "Denver, CO",
    image:
      "linear-gradient(135deg, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.15) 60%), url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop')",
    tokenPrice: 145,
    apr: 8.9,
    funded: 62,
    totalValue: 1950000,
    minInvestment: 1450,
  },
  {
    id: "harborline-tower",
    name: "Harborline Tower",
    location: "Seattle, WA",
    image:
      "linear-gradient(135deg, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.15) 60%), url('https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=1200&auto=format&fit=crop')",
    tokenPrice: 275,
    apr: 12.1,
    funded: 45,
    totalValue: 6300000,
    minInvestment: 2750,
  },
];

export type Holding = {
  propertyId: string;
  name: string;
  location: string;
  tokens: number;
  value: number;
  income: number;
  change: number;
};

export const holdings: Holding[] = [
  {
    propertyId: "aurora-heights",
    name: "Aurora Heights",
    location: "Miami, FL",
    tokens: 48,
    value: 12420,
    income: 118,
    change: 4.2,
  },
  {
    propertyId: "the-obsidian",
    name: "The Obsidian",
    location: "New York, NY",
    tokens: 22,
    value: 9840,
    income: 142,
    change: 6.8,
  },
  {
    propertyId: "harborline-tower",
    name: "Harborline Tower",
    location: "Seattle, WA",
    tokens: 31,
    value: 8525,
    income: 96,
    change: -1.4,
  },
  {
    propertyId: "cedar-&-vine",
    name: "Cedar & Vine",
    location: "Denver, CO",
    tokens: 40,
    value: 5800,
    income: 61,
    change: 2.1,
  },
];

export const portfolioHistory = [
  18200, 19100, 18700, 20400, 21800, 21200, 23600, 25100, 24700, 27300, 29800,
  36585,
];

export type Transaction = {
  id: string;
  type: "deposit" | "withdrawal" | "income" | "purchase";
  label: string;
  amount: number;
  asset: string;
  date: string;
  status: "completed" | "pending";
};

export const transactions: Transaction[] = [
  {
    id: "tx-1",
    type: "income",
    label: "Rental yield — Aurora Heights",
    amount: 118,
    asset: "USDC",
    date: "Jun 28, 2026",
    status: "completed",
  },
  {
    id: "tx-2",
    type: "purchase",
    label: "Purchased 12 tokens — The Obsidian",
    amount: -5040,
    asset: "USDC",
    date: "Jun 24, 2026",
    status: "completed",
  },
  {
    id: "tx-3",
    type: "deposit",
    label: "Deposit from external wallet",
    amount: 10000,
    asset: "USDC",
    date: "Jun 20, 2026",
    status: "completed",
  },
  {
    id: "tx-4",
    type: "income",
    label: "Rental yield — Harborline Tower",
    amount: 96,
    asset: "USDC",
    date: "Jun 15, 2026",
    status: "completed",
  },
  {
    id: "tx-5",
    type: "withdrawal",
    label: "Withdrawal to external wallet",
    amount: -2500,
    asset: "USDC",
    date: "Jun 9, 2026",
    status: "pending",
  },
];

export const stats = [
  { label: "Assets Tokenized", value: 128, suffix: "M+", prefix: "$" },
  { label: "Active Investors", value: 5400, suffix: "+", prefix: "" },
  { label: "Avg. Annual Yield", value: 10.8, suffix: "%", prefix: "" },
  { label: "Properties Listed", value: 64, suffix: "", prefix: "" },
];
