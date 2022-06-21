import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<Car[]>{
    return this.httpClient.get<Car[]>("http://localhost:3000/cars")
    }
    getCarBrandId(val:number):Observable<Car[]>{
      let newPath = "http://localhost:3000/cars?brandId=" + (val)
      return this.httpClient.get<Car[]>(newPath)
    }
  
    deleteCar(val:number):Observable<Car[]>{
      return this.httpClient.delete<Car[]>("http://localhost:3000/cars/"+val)
    }
    updateCar(car:Car):Observable<Car>{
      return this.httpClient.put<Car>("http://localhost:3000/cars/"+car.id,car)
  
    }
    getCarById(selectedCarId:number):Observable<Car[]>{
      let newPath = "http://localhost:3000/cars" +("?id=")+ (selectedCarId)
      return this.httpClient.get<Car[]>(newPath)
  }
  addCar(car:Car):Observable<Car>{

    return this.httpClient.post<Car>("http://localhost:3000/cars/",car)

  }
  getCarRentId(val:number):Observable<Car[]>{
    let newPath = "http://localhost:3000/cars/rent/?carId=" + (val)
    return this.httpClient.get<Car[]>(newPath)
  }
  getCarById2(val:number):Observable<Car>{
    return this.httpClient.get<Car>("http://localhost:3000/cars"+val)
  }
}
