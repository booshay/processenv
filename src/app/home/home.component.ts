import { Component, OnInit } from '@angular/core';
import * as process from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  env = process.env;

  constructor() { }

  ngOnInit() {
    console.log (process.env);
  }

}
