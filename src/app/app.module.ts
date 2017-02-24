import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import {OrderListModule} from 'primeng/primeng';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { HeroSearchComponent} from './hero-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './components/auth/auth.component';
import { ExpcomponentComponent } from './exp/expcomponent/expcomponent.component';
import { ExpdirectiveDirective } from './exp/expdirective.directive';
import { ExppipePipe } from './exp/exppipe.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    OrderListModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent,
    ExpcomponentComponent,
    ExpdirectiveDirective,
    ExppipePipe
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
