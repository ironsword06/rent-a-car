import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brand:Brand=new Brand()
  selectedBrandId:number;
  brands: Brand[];
  constructor(private brandService:BrandService, private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder) { }
 brandUpdateForm:FormGroup

  updateBrandAddForm(){
    this.brandUpdateForm=this.formBuilder.group({
      id:[this.brand.id,Validators.required],
      name:[this.brand.name,Validators.required],
      logo:[this.brand.logo,Validators.required]
})
}
ngOnInit(): void {
  this.getBrands()
  this.getBrandById()
 
}
getBrandById(){
  this.activatedRoute.params.subscribe(params =>{
    if(params['id']) this.selectedBrandId=params['id'];   
  })    
    this.brandService.getBrandById(this.selectedBrandId).subscribe(data =>{
      this.brand = data
      this.updateBrandAddForm();
    })        
}
getBrands(){
  this.brandService.getBrands().subscribe(data=>{
    this.brands=data;
  })
}
update(){
  if(this.brandUpdateForm.valid){
    this.brand=Object.assign({},this.brandUpdateForm.value)
  }
  this.brandService.updateBrand(this.brand).subscribe(data=>{
    alert(data.name +" başarıyla güncellendi")
  })
}

}
