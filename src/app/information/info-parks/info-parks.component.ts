import {Component, OnInit} from '@angular/core';
import {GisService} from '@app/_services/gis.service';

const infoparksId = 2663;


// @ts-ignore
@Component({
  selector: 'app-info-parks',
  templateUrl: './info-parks.component.html',
  styleUrls: ['./info-parks.component.less']
})
export class InfoParksComponent implements OnInit {
  geoJson: object;
  columns = ['Location', 'Elements', 'Lighting'];
  columnsNames = ['Местоположение', 'Элементы', 'Свет'];

  constructor(private gisService: GisService) {
  }

  ngOnInit(): void {
    this.gisService.getGeoJson(infoparksId).subscribe(item => this.geoJson = item);
  }

  getData() {
    const data = [];
    for (const item of this.geoJson['features']) {
      data.push(
        {
          Location: item.properties.Attributes.Location,
          Elements: item.properties.Attributes.Elements,
          Lighting: item.properties.Attributes.Lighting
        });
    }
    return data;
  }

}
