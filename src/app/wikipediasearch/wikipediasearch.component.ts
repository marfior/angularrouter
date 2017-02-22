import { Component, OnInit } from '@angular/core';
import {WikipediasearchService} from "../Services/WikipediasearchService";
import {Subject} from "rxjs";

@Component({
  selector: 'app-wikipediasearch',
  templateUrl: './wikipediasearch.component.html',
  styleUrls: ['./wikipediasearch.component.css']
})
export class WikipediasearchComponent implements OnInit {

  private arrResults = [];
  private term: string;

  private term$ = new Subject();

  constructor(private wikipediasearchService: WikipediasearchService) {

    this.term$
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(term => {
        this.wikipediasearchService.search(this.term).subscribe(results => {
          this.arrResults = results;
        })
      });
  }

  ngOnInit() {
  }

  public autoComplete()
  {
    this.term$.next(this.term);


  }

}
