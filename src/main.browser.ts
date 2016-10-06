import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { ApolloModule } from 'angular2-apollo';

import { App, Home } from './app/app';
import { client } from './apollo.browser';

@NgModule({
  bootstrap: [ App ],
  declarations: [ App, Home ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: Home, pathMatch: 'full' }
    ]),
    ApolloModule.withClient(client)
  ]
})
export class MainModule {

}
