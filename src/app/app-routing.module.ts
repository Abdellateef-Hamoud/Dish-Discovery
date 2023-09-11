import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
// import { ContactusComponent } from './contactus/contactus.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'browse recipes', component:RecipesComponent},
  {path:'about', component:AboutusComponent},
  // {path:'contact us', component:ContactusComponent},
 
  {path:'**', component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
