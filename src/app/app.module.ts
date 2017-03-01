import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { OrderListModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { MessagesModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import 'hammerjs';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './heroes/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/hero.service';
import { DashboardComponent } from './heroes/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchComponent } from './heroes/hero-search.component';
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
import { CarService } from './service/carservice'

import { PanoramaEquirectangularComponent } from './graphics/panorama-equirectangular/panorama-equirectangular.component';
import { CubeComponent } from './graphics/cube/cube.component';
import { HomeAComponent, DialogResultExampleDialog } from './home-a/home-a.component';
import { HomeBComponent } from './home-b/home-b.component';


@NgModule({
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    OrderListModule,
    DataTableModule,
    SharedModule,
    MessagesModule,
    ButtonModule,
    GalleriaModule,
    ChartModule,
    GrowlModule
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
    PrimengComponent,
    PanoramaEquirectangularComponent,
    CubeComponent,
    HomeAComponent,
    DialogResultExampleDialog,
    HomeBComponent
  ],
  providers: [HeroService, CarService],
  bootstrap: [AppComponent, DialogResultExampleDialog]
})
export class AppModule { }
