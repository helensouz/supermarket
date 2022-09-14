import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationModule]
 
  
})
export class NavigationModule { }
