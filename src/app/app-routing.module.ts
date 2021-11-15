import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectHistoryComponent } from './pages/project-history/project-history.component';

import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'log-in' },
      { path: 'log-in', component: LoginComponent }
    ]},
  { path: 'home', canActivate: [AuthGuardService], component: DashboardComponent },
  { path: 'project-history', canActivate: [AuthGuardService], component: ProjectHistoryComponent },
  { path: '**', redirectTo: 'auth'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
