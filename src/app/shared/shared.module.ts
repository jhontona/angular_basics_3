import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { Err404Component } from './components/err404/err404.component';

@NgModule({
  declarations: [NavComponent, FooterComponent, Err404Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent, 
    FooterComponent
  ]
})
export class SharedModule { }
