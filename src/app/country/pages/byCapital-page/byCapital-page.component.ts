import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchComponent } from '../../components/country-search/country-search.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearchComponent,CountryListComponent],
  templateUrl: './byCapital-page.component.html',
})
export class ByCapitalPageComponent {

 countryService=inject(CountryService)
 query=signal('');

 //tercera forma recupera los datos mas rapido

 countryResources=rxResource({

  request:() => ({query:this.query()}),
  loader:({request}) =>{
    if(!request.query) return of([]);

    return this.countryService.searchByCapital(request.query);
  }
 })
 //segunda forma
/*  countryResources=resource({

  request:() =>({query:this.query()}),

  loader:async({request}) =>{

    if(!request.query) return[]

    return await firstValueFrom(
      this.countryService.searchByCapital(request.query)
    );
  },

 }) */

/*  primera forma
isLoading=signal(false);
 isError=signal<string|null>(null);
 countries=signal<Country[]>([]);

  onSearch(value:string){
if(this.isLoading()) return;
    this.isLoading.set(true);
    this.isError.set(null);
  this.countryService.searchByCapital(value).subscribe({
    next:(countries)=>{
      this.isLoading.set(true);
    this.countries.set(countries);
    },
    error:(err) => {
      this.isLoading.set(false)
      this.countries.set([]);
      this.isError.set(err)
    },
  })



  } */
}
