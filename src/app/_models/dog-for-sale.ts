import {Sex} from '@app/_models/dog';

export class DogForSale {
  id: number;
  name: string;
  years: number;
  months: number;
  sex: Sex;
  isForSale: boolean;
  price: number;
  photoUrl: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
}
