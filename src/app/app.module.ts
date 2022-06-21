import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';
import { BrandComponent } from './common/brand/brand.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { ColorListComponent } from './common/color-list/color-list.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AdditionalServicesComponent } from './components/additional-services/additional-services.component';
import { CartSummaryComponent } from './common/cart-summary/cart-summary.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    BrandUpdateComponent,
    AddBrandComponent,
    ColorListComponent,
    CarListComponent,
    UpdateCarComponent,
    AddCarComponent,
    RentCarComponent,
    AdditionalServicesComponent,
    CartSummaryComponent,
    LoginComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     ReactiveFormsModule
 ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
