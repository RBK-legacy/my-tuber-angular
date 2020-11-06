import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//map: longitude and latitude
interface Location {
  latitude:string;
  longitude:string;
}
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }
  getLocation (){
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=')
  }
}
