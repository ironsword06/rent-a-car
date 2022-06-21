import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './common/brand/brand.component';
import { ColorListComponent } from './common/color-list/color-list.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { LoginComponent } from './components/login/login.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarListComponent},
  {path:"updatecar/:id", canActivate: [LoginGuard], component:UpdateCarComponent},
  {path:"addbrand", canActivate: [LoginGuard], component:AddBrandComponent},
  {path:"updatebrand/:id", canActivate: [LoginGuard], component:BrandUpdateComponent},
  {path:"cars/:id", component:CarListComponent},
  {path:"addcar",canActivate: [LoginGuard], component:AddCarComponent},
  {path:"colors/:id", component:CarListComponent},
  {path:"cars/rent/:id",component:RentCarComponent},
  {path:"login",component:LoginComponent}
  path

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
