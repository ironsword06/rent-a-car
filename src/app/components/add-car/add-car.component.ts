import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private carService:CarService,private colorService:ColorService,private brandService:BrandService) { }
  carAddForm:FormGroup
  car:Car=new Car()
  brands:Brand[]
  cars:Car[]
  colors:Color[]
  
  addCarAddForm(){
    this.carAddForm=this.formBuilder.group({
      // id:["",Validators.required],
      brandName:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      description:["",Validators.required],
      colorName:["",Validators.required],
      dailyPrice:["",Validators.required],
})
}
  ngOnInit(): void {
this.addCarAddForm()
this.getBrands()
  }
  getBrands(){
    this.brandService.getBrands().subscribe(data=>{
      this.brands=data
    })
}
  add(){
    if(this.carAddForm.valid){
      this.car=Object.assign({},this.carAddForm.value)
      console.log(this.car)
    }
    this.carService.addCar(this.car).subscribe(data=>{
      alert(data.brandName +"başarılıyla eklendi")
    })
  }

}
