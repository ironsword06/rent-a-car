import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdditionalServiceModel } from 'src/app/models/additionalServiceModel';
import { Car } from 'src/app/models/car';
import { AdditionalService } from 'src/app/services/additional-service.service';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
cars:Car[]
additionalServiceModel:AdditionalServiceModel[];
selectedCarId:number

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute, private additionalService:AdditionalService, private cartService:CartService) { }

  ngOnInit(): void {
    this.getCars()
    this.getAdditionalService()
  }
  getAdditionalService() {
    this.additionalService.getAdditionalServices().subscribe((data) => {
      this.additionalServiceModel = data;
    });
  }
  getCars(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id'])this.selectedCarId=params['id'];})
    this.carService.getCarById(this.selectedCarId).subscribe(data=>{
      this.cars=data
        })
    }

    addToCart2(additionalServiceModel1:AdditionalServiceModel) {
      this.cartService.addToCart2(additionalServiceModel1);

    }




  }