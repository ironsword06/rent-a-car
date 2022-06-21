import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  car:Car=new Car()
  selectedCarId:number;
  cars: Car[];
  carUpdateForm:FormGroup

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder) { }
  
  updateCarAddForm(){
    this.carUpdateForm=this.formBuilder.group({
      id:[this.car.id,Validators.required],
      brandName:[this.car.brandName,Validators.required],
      brandId:[this.car.brandId,Validators.required],
      colorId:[this.car.colorId,Validators.required],
      description:[this.car.description,Validators.required],
      colorName:[this.car.colorName,Validators.required],
})
}
  ngOnInit(): void {
    this.getCars()
    this.getCarById()
  }
    getCarById(){
      this.activatedRoute.params.subscribe(params =>{
        if(params['id']) this.selectedCarId=params['id'];   
      })    
        this.carService.getCarById2(this.selectedCarId).subscribe(data =>{
          this.car = data
          this.updateCarAddForm();
        })        
    }
    getCars(){
      this.carService.getCars().subscribe(data=>{
        this.cars=data;
      })
    }
    update(){
      if(this.carUpdateForm.valid){
        this.car=Object.assign({},this.carUpdateForm.value)
      }
      this.carService.updateCar(this.car).subscribe(data=>{
        alert(data.brandName +" başarıyla güncellendi")
      })
    }
  }


