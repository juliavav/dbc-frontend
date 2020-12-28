import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DogService} from '@app/_services';

export interface DialogDeleteData {
  id: number;
}

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.less']
})
export class DialogDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDeleteData, private dogService: DogService) {
  }

  noClick(): void {
    this.dialogRef.close();
  }

  yesClick(): void {
    this.dogService.deleteDog(this.data.id).pipe().subscribe();
    this.dialogRef.close();
  }

}
