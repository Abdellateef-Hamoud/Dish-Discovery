import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
// import { ContactusComponent } from './contactus/contactus.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'browse recipes', component:RecipesComponent},
  {path:'about', component:AboutusComponent},
  {path:'contact us', component:ContactUsComponent},
  {path:'reciedetails/:id', component:RecipedetailsComponent},
 
  {path:'**', component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
