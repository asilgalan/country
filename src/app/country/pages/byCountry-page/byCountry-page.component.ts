import { CountryService } from './../../services/country.service';
import { Component, inject, input, resource, signal } from '@angular/core';
import { CountrySearchComponent } from '../../components/country-search/country-search.component';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import{rxResource} from "@angular/core/rxjs-interop";
import { of } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [CountrySearchComponent, CountryListComponent],
  templateUrl: './byCountry-page.component.html',
})
export class ByCountryPageComponent {

placeHolder=input("Buscar por pais");

 countryservice=inject( CountryService);
 query=signal('');
 /* countryResource=resource({

  request:()=> ({query:this.query()}),
  loader: async({request}) =>{

    if(!request.query)return [];

    return await firstValueFrom(
      this.countryservice.searchByCountry(request.query)
    )
  }
 }) */
//OTRA FORMA ES y mas facil

countryResources=rxResource({
  request:() => ({query:this.query()}),
  loader:({request}) =>{
    if(!request.query)return of([]);

    return this.countryservice.searchByCountry(request.query)
  }

})
}
