import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  private id: string;
  constructor(activatedRoute: ActivatedRoute) {
    this.id =  activatedRoute.params["id"];
  }

  ngOnInit() {
  }

}
