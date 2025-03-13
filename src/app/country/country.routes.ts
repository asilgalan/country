import { ByCountryPageComponent } from './pages/byCountry-page/byCountry-page.component';
import { Routes } from "@angular/router";
import { ByCapitalPageComponent } from "./pages/byCapital-page/byCapital-page.component";
import { CountryLayoutComponent } from "./layouts/countryLayout/countryLayout.component";

export const countryRoutes: Routes = [

  {
    path:'',
    component:CountryLayoutComponent,
    children:[
      {
        path:"by-capital",
        loadComponent:() => import("./pages/byCapital-page/byCapital-page.component")
        .then((c)=> c.ByCapitalPageComponent)

      },
      {
        path:"by-pais",
        loadComponent:() => import("./pages/byCountry-page/byCountry-page.component").then((c) => c.ByCountryPageComponent)

      },
      {
        path:"by-region",
        loadComponent:() => import("./pages/ByRegion-page/ByRegion-page.component").then((r) => r.ByRegionPageComponent)

      },
      {
        path:"by/:country",
        loadComponent:() => import("./pages/country-page/country-page.component").then((r) => r.CountryPageComponent)

      },

      {
        path:'**',
        redirectTo:'by-capital'
      }
    ]
  },

];
