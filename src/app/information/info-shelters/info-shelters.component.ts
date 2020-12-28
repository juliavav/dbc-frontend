import {Component, OnInit} from '@angular/core';
import {GisService} from '@app/_services/gis.service';

const id = 744;


// @ts-ignore
@Component({
  selector: 'app-info-shelters',
  templateUrl: './info-shelters.component.html',
  styleUrls: ['./info-shelters.component.less']
})
export class InfoSheltersComponent implements OnInit {
  geoJson: object;
  columns = ['Name', 'District', 'Address'];
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
          Name: item.properties.Attributes.Name,
          District: item.properties.Attributes.District,
          Address: item.properties.Attributes.Address
        });
    }
    return data;
  }

}
