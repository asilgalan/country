import { Component, input, Input } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { flatMap } from 'rxjs';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe,RouterModule],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {

  @Input() countries: Country[] = [];


}
