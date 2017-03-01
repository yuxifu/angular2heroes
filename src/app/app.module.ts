import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {  } from 'primeng/primeng';
import { OrderListModule, DataTableModule, SharedModule, 
  MessagesModule, ButtonModule, GalleriaModule, ChartModule, 
  GrowlModule } from 'primeng/primeng';
import 'hammerjs';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './heroes/in-memory-data.service';

// app components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// layout components
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

// auth component
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth/auth.component';

// home
import { HomeComponent } from './home/home.component';
import { HomeAComponent, DialogResultExampleDialog } from './home/home-a/home-a.component';
import { HomeBComponent } from './home/home-b/home-b.component';

// heroes
import { HeroesPanelComponent } from './heroes/heroes-panel/heroes-panel.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/hero.service';
import { DashboardComponent } from './heroes/dashboard.component';
import { HeroSearchComponent } from './heroes/hero-search.component';

// experimental
import { ExpcomponentComponent } from './exp/expcomponent/expcomponent.component';
import { ExpdirectiveDirective } from './exp/expdirective.directive';
import { ExppipePipe } from './exp/exppipe.pipe';

// graphics
import { GraphicsComponent } from './graphics/graphics/graphics.component';
import { PanoramaEquirectangularComponent } from './graphics/panorama-equirectangular/panorama-equirectangular.component';
import { CubeComponent } from './graphics/cube/cube.component';

// primeng
import { PrimengComponent } from './primeng/primeng/primeng.component';
import { CarService } from './service/carservice'


@NgModule({
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    AppRoutingModule,
    OrderListModule, DataTableModule, SharedModule,  MessagesModule, 
    ButtonModule, GalleriaModule, ChartModule, GrowlModule
  ],
  declarations: [
    AppComponent,

    HeroesPanelComponent,
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
    HomeAComponent,
    DialogResultExampleDialog,
    HomeBComponent,

    GraphicsComponent,
    PanoramaEquirectangularComponent,
    CubeComponent,

    PrimengComponent,
  ],
  providers: [HeroService, CarService],
  entryComponents: [DialogResultExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
