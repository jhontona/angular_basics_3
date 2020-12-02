import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { FruitsService } from './fruits.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LoginService,
    FruitsService
  ]
})
export class CoreModule { }
