import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './heroes/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HomeComponent } from './home/home.component';
import { HeroesPanelComponent } from './heroes/heroes-panel/heroes-panel.component';
import { GraphicsComponent } from './graphics/graphics/graphics.component';
import { PrimengComponent } from './primeng/primeng/primeng.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'heroes', component: HeroesPanelComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'detail/:id', component: HeroDetailComponent },
            { path: 'list', component: HeroesComponent }
        ]
    },
    { path: 'graphics', component: GraphicsComponent },
    { path: 'primeng', component: PrimengComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }