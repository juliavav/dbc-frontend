import {Component, OnInit} from '@angular/core';
import {GisService} from '@app/_services/gis.service';

const id = 1193;


// @ts-ignore
@Component({
  selector: 'app-info-vet',
  templateUrl: './info-vet.component.html',
  styleUrls: ['./info-vet.component.less']
})
export class InfoVetComponent implements OnInit {
  geoJson: object;
  columns = ['FullName', 'District', 'Address'];
  columnsNames = ['Название', 'Район', 'Местоположение'];

  constructor(private gisService: GisService) {
  }

  ngOnInit(): void {
    this.gisService.getGeoJson(id).subscribe(item => this.geoJson = item);
  }

  getData() {
    const data = [];
    for (const item of this.geoJson['features']) {
      data.push(
        {
          FullName: item.properties.Attributes.FullName,
          District: item.properties.Attributes.District,
          Address: item.properties.Attributes.Address
        });
    }
    return data;
  }

}
