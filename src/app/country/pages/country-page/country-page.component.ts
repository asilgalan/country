import { Component, inject, signal, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found.component';
import { CountryInformationComponent } from '../../../shared/components/country-information/country-information.component';

@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent,CountryInformationComponent],
  templateUrl: './country-page.component.html',
})
export class CountryPageComponent {

  countricode=inject(ActivatedRoute).snapshot.params['country'];
countryservice=inject(CountryService)
  countryresource=rxResource({

    request:() => ({code:this.countricode}),
    loader:({request}) =>{
      return this.countryservice.searchByAlphaCode(request.code);
    }
  })

}
