import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { map, Observable,catchError, throwError, delay } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/countrymapper';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

private http=inject(HttpClient)


searchByCapital(query:string):Observable<Country[]>{
  query=query.toLocaleLowerCase();
 return  this.http.get<RESTCountry[]>(`${environment.api_key}/capital/${query}`)
 .pipe(
  map((city)=>CountryMapper.mapRESTCountrytoarrayCountrys(city) ),

  catchError(error =>{
    console.log("error en fecht",error);

    return throwError(() => new Error(`No se pudo optener paise con el nombre: ${query}`));

  })
 )}

 searchByCountry(query:string):Observable<Country[]>{
  query=query.toLocaleLowerCase();
  return this.http.get<RESTCountry[]>(`${environment.api_key}/name/${query}`)
  .pipe(
    map((country)=>CountryMapper.mapRESTCountrytoarrayCountrys(country)),
    catchError(error =>{
      return throwError(() => new Error(`No se pudo optener paise con el nombre: ${query}`))
    })
  )

 }
 searchByAlphaCode(code:string){
  return this.http.get<RESTCountry[]>(`${environment.api_key}/alpha/${code.toLocaleLowerCase()}`)
  .pipe(
    map((country)=>CountryMapper.mapRESTCountrytoarrayCountrys(country)),

    map(countries =>countries.at(0)),

    catchError(error =>{
      return throwError(() => new Error(`No se pudo optener paise por el codigo: ${code}`))
    })
  )

 }
}
