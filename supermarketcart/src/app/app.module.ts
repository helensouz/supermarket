import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
    
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
