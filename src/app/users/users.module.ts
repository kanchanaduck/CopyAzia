import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
// import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  // { path: 'locker', component: LockerComponent }
]

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    // BreadcrumbComponent,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class UsersModule { }
