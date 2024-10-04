import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LandingpageComponent } from './Pages/landingpage/landingpage.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'landing',component:LandingpageComponent}

];
