import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
brands:Brand[];
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }
getBrands(){
  this.brandService.getBrands().subscribe(data=>{
    this.brands=data
  })
}
deleteBrand(val:number){
  if(confirm("Are you sure?")){
    this.brandService.deleteBrand(val).subscribe()
    window.location.href="/"
  }
}
}
