import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './heroes/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HomeComponent } from './home/home.component';
import { HomeAComponent } from './home/home-a/home-a.component';
import { HomeBComponent } from './home/home-b/home-b.component';
import { HeroesPanelComponent } from './heroes/heroes-panel/heroes-panel.component';
import { GraphicsComponent } from './graphics/graphics/graphics.component';
import { PrimengComponent } from './primeng/primeng/primeng.component';

const routes: Routes = [
    { path: '', redirectTo: '//home/(home-a:a//home-b:b)', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent, children: [
            { path: '', redirectTo: '/home/(home-a:a//home-b:b)', pathMatch: 'full' },
            { path: 'a', component: HomeAComponent, outlet: 'home-a' },
            { path: 'b', component: HomeBComponent, outlet: 'home-b' },
        ]
    },
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