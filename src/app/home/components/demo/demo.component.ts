import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FruitsService } from './../../../core/fruits.service';
import { LoginService } from './../../../core/login.service';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  prueba = "Hola2";
  valor = 500;
  hoy = new Date();

  @Output() agregarFrutaClick: EventEmitter<any> = new EventEmitter();

  items = [];
  fruits = [
    {
      id: 1,
      nombre: 'manzana',
      precio: 500
    },
    {
      id: 2,
      nombre: 'piña',
      precio: 1500
    }
  ];

  constructor(
    private fruitsService: FruitsService,
    private loginService: LoginService
  ) { 
    
  }

  ngOnInit(): void {
    this.getAllFruits();
    this.getFruit();
    this.getLogin();
    this.postLogin();
  }

  getAllFruits(){
    this.fruitsService.getFruits()
    .subscribe(fruits => {
      this.fruits = fruits;
    });
  }

  getFruit(){
    this.fruitsService.getFruit(3)
    .subscribe(fruit => {
      console.log(fruit);
    });
  }

  getLogin(){
    this.loginService.getLogin('user', 'pass')
    .subscribe(logUser => {
      console.log('GET LOGIN');
      console.log(logUser);
    });
  }

  postLogin() {
    this.loginService.postLogin('user', 'pass2')
    .subscribe(logUser => {
      console.log('POST LOGIN');
      console.log(logUser);
    });
  }

  addFruit(){
    this.items.push('Nueva fruta');
    this.agregarFrutaClick.emit('Se agrego fruta');
  }

  deleteFruit(index: number) {
    this.items.splice(index, 1);
  }

}
