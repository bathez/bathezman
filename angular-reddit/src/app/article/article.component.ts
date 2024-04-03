import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
 
votes: number;
title: string;
link: string;

constructor() {
  this.votes = 10;
  this.title = 'Angular 2';
  this.link = 'http:/angular.io';
}

voteUp() {
  this.votes += 1;
}

voteDown(): boolean {
  this.votes-= 1;
  return false
}

ngOnInit(): void {
  // throw new Error('Method not implemented.');
}

}