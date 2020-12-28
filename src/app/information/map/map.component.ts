import {Component, Input, OnInit} from '@angular/core';
import DG from '2gis-maps';
import 'leaflet.markercluster';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  @Input() json: object;
  @Input() urlImg: string;

  constructor() {

  }

  ngOnInit(): void {
    const map = DG.map('map', {
      center: [55.75, 37.61],
      zoom: 10
    });

    const myIcon = DG.icon({iconUrl: `./././assets/${this.urlImg}`});

    const indicates = DG.geoJson(this.json, {
      pointToLayer(feature, latlng) {
        return DG.marker(latlng, {icon: myIcon});
      }
    });
    const clusters = DG.markerClusterGroup();
    clusters.addLayer(indicates);
    map.addLayer(clusters);
  }
}
