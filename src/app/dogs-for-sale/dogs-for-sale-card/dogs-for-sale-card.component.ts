import {Component, Input, OnInit} from '@angular/core';
import {DogForSale} from '@app/_models';

@Component({
  selector: 'app-dogs-for-sale-card',
  templateUrl: './dogs-for-sale-card.component.html',
  styleUrls: ['./dogs-for-sale-card.component.less']
})
export class DogsForSaleCardComponent implements OnInit {
  @Input() dog: DogForSale;

  constructor() {
  }

  ngOnInit(): void {
  }

  getAgeString(): string {
    let ageString = '';
    const years = this.dog.years;
    const months = this.dog.months;
    if (years !== 0) {
      ageString += years;
      if (years < 5) {
        ageString += ' год';
        if (years !== 1) {
          ageString += 'a';
        }
      } else {
        ageString += ' лет';
      }
    }
    if (ageString.length !== 0) {
      ageString += ' ';
    }
    if (months !== 0) {
      ageString += months + ' месяц';
      if (months > 1 && months < 5) {
        ageString += 'а';
      }
      if (months >= 5) {
        ageString += 'ев';
      }
    }
    return ageString;
  }
}
