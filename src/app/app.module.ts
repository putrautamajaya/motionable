import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AuthService } from '../app/services/auth/auth.service';
import { AuthGuardService } from '../app/services/auth-guard/auth-guard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MobileBottomNavigationComponent } from './components/mobile-bottom-navigation/mobile-bottom-navigation.component';
import { ProjectHistoryComponent } from './pages/project-history/project-history.component';
import { ProjectBriefComponent } from './pages/project-brief/project-brief.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TopNavigationComponent,
    SideMenuComponent,
    MobileBottomNavigationComponent,
    ProjectHistoryComponent,
    ProjectBriefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
