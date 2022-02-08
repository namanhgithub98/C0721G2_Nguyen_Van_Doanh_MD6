import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsListComponent} from './news-list/news-list.component';


const routes: Routes = [
  {
    path: 'list', component: NewsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
