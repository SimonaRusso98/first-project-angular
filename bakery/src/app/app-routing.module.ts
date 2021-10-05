import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { MuffinComponent } from './components/muffin/muffin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TorteComponent } from './components/torte/torte.component';

const routes: Routes = [
  {path: 'contatti', component: FooterComponent},
  {path: 'torte', component: TorteComponent},
  {path: 'muffin', component: MuffinComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [NavbarComponent, HomeComponent, FooterComponent, TorteComponent, MuffinComponent]
