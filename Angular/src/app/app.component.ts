import { Component} from '@angular/core';
import{OnInit} from '@angular/core';
import { AirQualityService } from './air-quality.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'airqualityapp';
  countries = [];
  locations=[];
  country_name: string;
  public countrydata=true;
  public locationdata:boolean;
  constructor(private airQualityService: AirQualityService) {
  }
  ngOnInit() {
    this.airQualityService.getCountries().subscribe((res) => {
      this.countries = res['results'];
    },
      (error) => console.log(error));
  }
  searchCountry(country: string) {
    this.countrydata=false;
    this.locationdata=true;
    console.log(country);
    this.country_name = country;
    this.airQualityService.fetchCountryData('https://api.openaq.org/v1/latest?country='+this.country_name).subscribe((res: any) => {
      this.locations=res.results;
    });
  }
}
