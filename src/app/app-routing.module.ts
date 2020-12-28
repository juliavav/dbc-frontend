import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@app/_helpers';
import {LoginComponent} from '@app/login/login.component';
import {InfoParksComponent} from '@app/information/info-parks/info-parks.component';
import {InfoSheltersComponent} from '@app/information/info-shelters/info-shelters.component';
import {InfoVetComponent} from '@app/information/info-vet/info-vet.component';
import {InfoComponent} from '@app/information/info/info.component';
import {RegistrationComponent} from '@app/registration/registration.component';
import {MyDogsComponent} from '@app/my-dogs/my-dogs.component';
import {DogsForSaleComponent} from '@app/dogs-for-sale/dogs-for-sale.component';


const infoRoutes = [
  {path: 'parks', component: InfoParksComponent, canActivate: [AuthGuard]},
  {path: 'shelters', component: InfoSheltersComponent, canActivate: [AuthGuard]},
  {path: 'vet', component: InfoVetComponent, canActivate: [AuthGuard]}
];

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MyDogsComponent, canActivate: [AuthGuard]},
  {path: 'info', component: InfoComponent, children: infoRoutes, canActivate: [AuthGuard]},
  {path: 'registration', component: RegistrationComponent},
  {path: 'dogs', component: MyDogsComponent, canActivate: [AuthGuard]},
  {path: 'sale', component: DogsForSaleComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
