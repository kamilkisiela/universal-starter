import { Component, OnInit } from '@angular/core';
import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';
import { ApolloQueryResult } from 'apollo-client';

import gql from 'graphql-tag';

@Component({
  selector: 'author',
  template: `
    Author: {{author.firstName}} {{author.lastName}}
  `
})
export class AuthorComponent implements OnInit {
  author: Object = {};
  
  constructor(
    private apollo: Angular2Apollo
  ) {}

  ngOnInit() {
    this.author = this.apollo.watchQuery({
      query: gql`
        query getAuthor {
          author {
            firstName
            lastName
          }
        }
      `
    })
      .subscribe(({data}) => this.author = data.author);
  }
}
