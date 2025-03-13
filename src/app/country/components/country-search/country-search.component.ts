import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'country-search',
  imports: [],
  templateUrl: './country-search.component.html',
})
export class CountrySearchComponent {

  placeholder=input('Buscar por Capital');
  @Output() onsearchEmit:EventEmitter<string> = new EventEmitter();
  onSearch(value:string){

    this.onsearchEmit.emit(value);
  }
}
