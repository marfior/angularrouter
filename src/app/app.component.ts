import { Component } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@Component({
  selector: 'app-root',
  providers: [Location, { provide: LocationStrategy, useClass: HashLocationStrategy}],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
