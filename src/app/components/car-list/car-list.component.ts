import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
cars:Car[]

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    this.getCars()
  }
 getCars(){
  this.activatedRoute.params.subscribe(params =>{
    if(params['id']) { 
      this.carService.getCarBrandId(params['id']).subscribe(data=>{
        this.cars=data
      })
    }  else {
      this.carService.getCars().subscribe(data=>{
        this.cars=data
      })
    }
  }) 
      this.carService.getCars().subscribe(data=>{
        this.cars=data
      })
    }
    deleteCar(val:number){
      if(confirm("Are you sure?")){
        this.carService.deleteCar(val).subscribe()
        window.location.href="/"
      }
    }
    addToCart(car: Car) {
      this.cartService.addToCart(car);

    }
  }
