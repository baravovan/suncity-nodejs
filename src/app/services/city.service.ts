import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/city.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  constructor(private http: HttpClient) { }

  listCities(){
    return this.http.get('/api/city/list')
  }

  getCities() : Observable<City[]>{
    return this.listCities()
      .pipe(map(data=>{
        let cityList = data["data"];
        return cityList.map(function(city:any) {
            return {
                      name: city.name, 
                      lattitude: city.lattitude, 
                      longitude: city.longitude
                    };
          });
      }));
  }

  createCity(name: string, lat: string, lng: string){
    try{
      return this.http.post('/api/city/create', {
        name : name,
        lattitude : lat,
        longitude : lng
      }).subscribe(response => console.log(response));
    } catch(error){
      console.error(error);
    }
  }

  deleteCity(city: string){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        name: city,
      },
    };
    return this.http.delete('/api/city/delete', options)
      .subscribe();
  }

  getCity(city: string) {
    let param: any = {'name': city};
    return this.http.get('/api/city/get', {params: param})
  }

  getCityByName(city: string) : Observable<City[]>{
    return this.getCity(city)
      .pipe(map(data=>{
        let cityList = data["data"];
        return cityList.map(function(city:any) {
            return {
                      name: city.name, 
                      lattitude: city.lattitude, 
                      longitude: city.longitude
                    };
          });
      }));
  }
}
