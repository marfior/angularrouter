import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Observable} from "rxjs";
import {TrimPipe} from "../trim.pipe";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  private nameObservable = Observable.of('Martin');
  private pi: number = Math.PI;

  private studentone = { name: "Martin Fiorentino"};

  private studentMessageMapping = {
    '=5': 'Recently.',
    '=20': 'Something in the past.',
    '=400': 'I cant even remmeber.',
  };

  private todaysDate = Date.now();

  private students = [
    { id: 1, name: "Martin"},
    { id: 2, name: "Peter"},
    { id: 3, name: "Andre"}
  ]

  constructor() { }

  ngOnInit() {
  }



}
