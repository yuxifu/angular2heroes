import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import {OrderListModule} from 'primeng/primeng';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './heroes/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/hero.service';
import { DashboardComponent } from './heroes/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { HeroSearchComponent} from './heroes/hero-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './components/auth/auth.component';
import { ExpcomponentComponent } from './exp/expcomponent/expcomponent.component';
import { ExpdirectiveDirective } from './exp/expdirective.directive';
import { ExppipePipe } from './exp/exppipe.pipe';
import { HomeComponent } from './home/home.component';
import { HeroesPanelComponent } from './heroes/heroes-panel/heroes-panel.component';
import { GraphicsComponent } from './graphics/graphics/graphics.component';
import { PrimengComponent } from './primeng/primeng/primeng.component';

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
    ExppipePipe,
    HomeComponent,
    HeroesPanelComponent,
    GraphicsComponent,
    PrimengComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
