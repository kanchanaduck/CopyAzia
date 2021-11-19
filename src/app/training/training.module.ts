import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { DataTablesModule } from 'angular-datatables';

import { TrainingComponent } from './training/training.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManpowerComponent } from './manpower/manpower.component';

const routes: Routes = [
  { path: '', component: TrainingComponent },
  { path: 'manpower', component: ManpowerComponent }
]

@NgModule({
  declarations: [
    TrainingComponent,
    ManpowerComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TrainingModule { }
