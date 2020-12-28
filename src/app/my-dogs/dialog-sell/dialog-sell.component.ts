import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DogService} from '@app/_services';

export interface DialogSellData {
  id: number;
  cost: number;
}

@Component({
  selector: 'app-dialog-sell',
  templateUrl: './dialog-sell.component.html',
  styleUrls: ['./dialog-sell.component.less']
})

export class DialogSellComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogSellComponent>,
    @Inject(MAT_DIALOG_DATA) public sellData: DialogSellData, private dogService: DogService) {
  }

  noClick(): void {
    this.dialogRef.close();
  }

  yesClick(): void {
    this.dogService.sellDog(this.sellData.id, this.sellData.cost).pipe().subscribe();
    this.dialogRef.close();
  }

}
