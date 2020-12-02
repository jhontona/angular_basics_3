import { Component, OnInit } from '@angular/core';
import { Category } from './../../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [
    {"idCategoria":"17","nombreCategoria":"Agroindustria Y Alimentos"},
    {"idCategoria":"16","nombreCategoria":"Estilo De Vida Y Consumo"},
    {"idCategoria":"18","nombreCategoria":"Industria,Manufactura Y Medio Ambiente"},
    {"idCategoria":"10","nombreCategoria":"Industrias Creativas Y Economia Naranja"},
    {"idCategoria":"19","nombreCategoria":"Moda Y Confección"}
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onOptionsSelected(id: string) {
    console.log(id);
  }

}
