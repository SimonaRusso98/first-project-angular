import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesService } from './services.service';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MuffinComponent } from './components/muffin/muffin.component';
import { TorteComponent } from './components/torte/torte.component';

//import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MuffinComponent,
    TorteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
