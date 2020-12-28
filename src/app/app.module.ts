import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ErrorInterceptor, JwtInterceptor} from './_helpers';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {InfoSheltersComponent} from './information/info-shelters/info-shelters.component';
import {InfoVetComponent} from './information/info-vet/info-vet.component';
import {InfoParksComponent} from './information/info-parks/info-parks.component';
import {InfoComponent} from './information/info/info.component';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MapComponent} from './information/map/map.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {TableComponent} from './information/table/table.component';
import {MyDogsComponent} from './my-dogs/my-dogs.component';
import {DogCardComponent} from './my-dogs/dog-card/dog-card.component';
import {DogsForSaleComponent} from './dogs-for-sale/dogs-for-sale.component';
import {DogsForSaleCardComponent} from './dogs-for-sale/dogs-for-sale-card/dogs-for-sale-card.component';
import {RegistrationComponent} from './registration/registration.component';
import {DialogSellComponent} from './my-dogs/dialog-sell/dialog-sell.component';
import {DialogDeleteComponent} from './my-dogs/dialog-delete/dialog-delete.component';
import {DialogSellRemoveComponent} from './my-dogs/dialog-sell-remove/dialog-sell-remove.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    InfoSheltersComponent,
    InfoVetComponent,
    InfoParksComponent,
    InfoComponent,
    MapComponent,
    TableComponent,
    MyDogsComponent,
    DogCardComponent,
    DogsForSaleComponent,
    DogsForSaleCardComponent,
    RegistrationComponent,
    DialogSellComponent,
    DialogDeleteComponent,
    DialogSellRemoveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    HttpClientModule,
    MatButtonToggleModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: LOCALE_ID, useValue: 'ru-RU'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
