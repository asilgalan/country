import { DecimalPipe } from '@angular/common';
import { Country } from './../../../country/interfaces/country.interface';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.component.html',
})
export class CountryInformationComponent {

  @Input() country!: Country |undefined;

 }
