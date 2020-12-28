import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DogService} from '@app/_services';

export interface DialogSellRemoveData {
  id: number;
  cost: number;
}

@Component({
  selector: 'app-dialog-sell-remove',
  templateUrl: './dialog-sell-remove.component.html',
  styleUrls: ['./dialog-sell-remove.component.less']
})
export class DialogSellRemoveComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogSellRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogSellRemoveData, private dogService: DogService) {
  }

  noClick(): void {
    this.dialogRef.close();
  }

  yesClick(): void {
    this.dogService.removeFromSale(this.data.id).pipe().subscribe();
    this.dialogRef.close();
  }

}
