import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'concepts', component: ConceptsComponent, canActivate: [AuthGuard] },
  {
    path: 'users', // lazy loading module
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
