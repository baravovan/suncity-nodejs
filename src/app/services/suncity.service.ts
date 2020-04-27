import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityService } from '../services/city.service';
import { CityInfo } from '../models/cityInfo.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuncityService {

  constructor(private http: HttpClient,
              private cityService : CityService) {  }

  getInfoFromServer(lattitude : string, longitude : string, date : string){
    let params: any = {'lat': lattitude, 'lng': longitude, 'date': date};
    return this.http.get('https://api.sunrise-sunset.org/json?', { params : params});
  }

  getSunInfo(lattitude : string, longitude : string, date : string) : Observable<CityInfo> {
    return this.getInfoFromServer(lattitude, longitude, date)
      .pipe(map(data=>{
        let cityInfo = data["results"];
        return cityInfo as CityInfo;
      }));
  }
}
