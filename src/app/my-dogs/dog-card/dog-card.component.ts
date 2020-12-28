import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Dog} from '@app/_models';
import {MatDialog} from '@angular/material/dialog';
import {DialogDeleteComponent} from '@app/my-dogs/dialog-delete/dialog-delete.component';
import {DialogSellComponent} from '@app/my-dogs/dialog-sell/dialog-sell.component';
import {DialogSellRemoveComponent} from '@app/my-dogs/dialog-sell-remove/dialog-sell-remove.component';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.less']
})
export class DogCardComponent implements OnInit {
  @Input() dog: Dog;
  price: number;

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: {id: this.dog.id}
    });
    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });
  }

  openSellDialog(): void {
    let dialogRef;
    if (this.dog.isForSale) {
      dialogRef = this.dialog.open(DialogSellRemoveComponent, {
        width: '250px',
        data: {id: this.dog.id, price: this.price}
      });
    } else {
      dialogRef = this.dialog.open(DialogSellComponent, {
        width: '250px',
        data: {id: this.dog.id, price: this.price}
      });
    }
    dialogRef.afterClosed().subscribe(result => {
      //this.cdr.detectChanges();
      window.location.reload();
    });
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
