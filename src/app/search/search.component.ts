import { Component, OnInit } from '@angular/core';
import { City } from '../models/city.model';
import { CityInfo } from '../models/cityInfo.model';
import { SuncityService } from '../services/suncity.service';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ CityService, SuncityService ]
})
export class SearchComponent implements OnInit {

  city : City[] = [];
  cityInfo : CityInfo;

  cityName : string;
  dateTime : Date;
  searchType : string;

  sunriseTime : string;
  sunsetTime : string;
  show : boolean;

  constructor(private sunCityService : SuncityService,
              private cityService : CityService) { 
    this.sunriseTime = '';
    this.sunsetTime = '';
    this.show = false;
  }

  ngOnInit(): void { }

  getInfo(){
    this.cityService.getCityByName(this.cityName).subscribe(data => {
      this.city = data as City[];
      this.sunCityService.getSunInfo(this.city[0].lattitude, this.city[0].longitude, this.dateTime.toString())
        .subscribe(data => {
          this.sunriseTime = data.sunrise;
          this.sunsetTime = data.sunset;
          this.show = true;
        });
    });
  }

  clear(){
    this.show = false;
  }
}