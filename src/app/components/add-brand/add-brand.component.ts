import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private brandService:BrandService) { }
  brandAddForm:FormGroup
  brand:Brand=new Brand()
  
  createBrandAddForm(){
    this.brandAddForm=this.formBuilder.group({
      name:["",Validators.required],
      id:["",Validators.required],
      logo:["",Validators.required],
    })
  }

  ngOnInit(): void {
    this.createBrandAddForm()

  }
  add(){
    if(this.brandAddForm.valid){
      this.brand=Object.assign({},this.brandAddForm.value)
    }
    this.brandService.addBrand(this.brand).subscribe(data=>{
      alert(data.name +"başarılıyla eklendi")
    })
  }

  }

