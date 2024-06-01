import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalaxyListComponent } from './galaxy-list/galaxy-list.component';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {CreateGalaxyComponent} from "./galaxy-create/galaxy-create.component";
import {GalaxyDetailComponent} from "./galaxy-detail/galaxy-detail.component";
import {GalaxyUpdateComponent} from "./galaxy-update/galaxy-update.component";
import {GalaxyDeleteComponent} from "./galaxy-delete/galaxy-delete.component";

const routes: Routes = [
  { path: '', redirectTo: '/galaxies', pathMatch: 'full' }, // Редирект на список галактик
  { path: 'posts', component: GalaxyListComponent },
  { path: 'posts/create', component: CreateGalaxyComponent },
  { path: 'post-detail/:id', component: GalaxyDetailComponent },
  { path: 'posts/update/:id', component: GalaxyUpdateComponent },
  { path: 'posts/delete/:id', component: GalaxyDeleteComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Другие маршруты для других компонентов, если есть
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
