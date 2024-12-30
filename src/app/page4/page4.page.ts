import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

  public data = [
    ''
  ];

  public results = [...this.data];

  constructor() { }

  ngOnInit() {
  }

  handleInput(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    if (query === '') {
      this.results = [...this.data]; // Show all items if the query is empty
    } else {
      this.results = this.data.filter((d) => d.toLowerCase().includes(query));
    }
  }
} 
