import { NgModule } from '@angular/core';

import { AuthorComponent } from './author.component';
import { AuthorRoutingModule } from './author-routing.module';

@NgModule({
  imports: [
    AuthorRoutingModule
  ],
  declarations: [
    AuthorComponent
  ]
})
export class AuthorModule { }
