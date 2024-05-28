export interface Seller {
  id: number;
  name: string;
  address?: string;
  readonly npwp: string;
}

export interface StarSeller extends Seller {
  expiryDate: string;
}
