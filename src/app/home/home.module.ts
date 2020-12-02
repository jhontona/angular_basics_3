import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { DemoComponent } from './components/demo/demo.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { IvaPipe } from './pipes/iva.pipe';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [HomeComponent, BlocksComponent, DemoComponent, FormComponent, IvaPipe, HighlightDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
