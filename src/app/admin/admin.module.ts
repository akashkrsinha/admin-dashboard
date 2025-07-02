import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserTableComponent } from './user-table/user-table.component';
import { LayoutComponent } from './layout/layout.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgChartsModule } from 'ng2-charts';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UserTableComponent,
    LayoutComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 50,
      outerStrokeWidth: 10,
      innerStrokeWidth: 5,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      showUnits: false,
    }),
    NgChartsModule
  ]
})
export class AdminModule { }
