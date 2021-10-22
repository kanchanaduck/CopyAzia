import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  // { path: 'locker', component: LockerComponent }
]

@NgModule({
  declarations: [],
  imports: [
    BreadcrumbComponent,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
