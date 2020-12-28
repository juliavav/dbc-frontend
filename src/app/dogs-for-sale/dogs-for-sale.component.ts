import {Component, OnInit} from '@angular/core';
import {DogService} from '@app/_services';
import {DogForSale} from '@app/_models';

@Component({
  selector: 'app-dogs-for-sale',
  templateUrl: './dogs-for-sale.component.html',
  styleUrls: ['./dogs-for-sale.component.less']
})
export class DogsForSaleComponent implements OnInit {

  constructor(private dogService: DogService) {
  }

  dogs: DogForSale[];

  ngOnInit(): void {
    this.dogService.getDogsForSale().subscribe(item => this.dogs = item);
  }
}
