export interface Seller {
  id: number;
  name: string;
  address?: string;
  readonly npwp: string;
  getName(): string;
}

export interface StarSeller extends Seller {
  expiryDate: string;
  getExpiryDate(): string;
  setExpiryDate(date: string): void;
}
