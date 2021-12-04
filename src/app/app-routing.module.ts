import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/components/concepts.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'concepts', component: ConceptsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
