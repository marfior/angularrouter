import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import { ShowDetailsComponent } from './show-details/show-details.component';
import { PipesComponent } from './pipes/pipes.component';
import { TrimPipe } from './trim.pipe';
import { DoubleValuePipe } from './double-value.pipe';
import { FilterByIDPipe } from './filter-by-id.pipe';
import { WikipediasearchComponent } from './wikipediasearch/wikipediasearch.component';
import {WikipediasearchService} from "./Services/WikipediasearchService";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ShowDetailsComponent,
    PipesComponent,
    TrimPipe,
    DoubleValuePipe,
    FilterByIDPipe,
    WikipediasearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WikipediasearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
