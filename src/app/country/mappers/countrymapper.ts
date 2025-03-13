import { Country } from '../interfaces/country.interface';
import { RESTCountry, Translation } from './../interfaces/rest-country.interface';
export class CountryMapper{

  static mapRESTCountrytoCountry(rest:RESTCountry):Country{

    return{
      flag:rest.flag,
      flagsvg:rest.flags.svg,
      name:rest.translations['spa'].common || 'no Spanish name',
      capital:rest.capital.join(","),
      population:rest.population,
      cca2:rest.cca2,
      region:rest.region

    }
  }

  static mapRESTCountrytoarrayCountrys(rest:RESTCountry[]):Country[]{

    return rest.map(this.mapRESTCountrytoCountry);
  }
}
