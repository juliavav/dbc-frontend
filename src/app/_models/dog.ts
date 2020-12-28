export enum Sex {
  male,
  female
}

export class Dog {
  id: number;
  name: string;
  years: number;
  months: number;
  sex: Sex;
  isForSale: boolean;
  price: number;
  photoUrl: string;
}
