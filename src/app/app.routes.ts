import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path:'', redirectTo:'dashboard', pathMatch: 'full'}, //Redirect to dashboard
    { path:'dashboard', component: DashboardComponent}, //calling dashboard component here
    { path:'**', redirectTo:'dashboard'}
];
