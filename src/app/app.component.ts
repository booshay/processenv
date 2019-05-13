import { Component } from '@angular/core';
import * as process from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'processenv';
  env = process.env;
}
