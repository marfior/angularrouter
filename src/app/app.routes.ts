import {Routes} from "@angular/router";
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ShowDetailsComponent} from "./show-details/show-details.component";
/**
 * Created by stc2 on 15/02/2017.
 */

export const appRoutes: Routes = [
  { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent},
  { path: 'show-details', component: ShowDetailsComponent},
];
