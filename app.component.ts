import { Component, OnInit, Input } from '@angular/core';
import {faturas} from './faturas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto_teste';
  lista_faturas = faturas;
 
}