import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<Brand[]>{
    return this.httpClient.get<Brand[]>("http://localhost:3000/brands")
  }
  
updateBrand(brand:Brand):Observable<Brand>{
    return this.httpClient.put<Brand>("http://localhost:3000/brands/"+brand.id,brand)

  }
  getBrandById(proId:number):Observable<Brand>{
    let newPath = "http://localhost:3000/brands/" + (proId)
    return this.httpClient.get<Brand>(newPath)
  }
  deleteBrand(val:number):Observable<Brand[]>{
    return this.httpClient.delete<Brand[]>("http://localhost:3000/brands/"+val)
  }
  addBrand(brand:Brand):Observable<Brand>{

    return this.httpClient.post<Brand>("http://localhost:3000/brands/",brand)

  }
}

