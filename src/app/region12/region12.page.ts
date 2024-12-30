import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region12',
  templateUrl: './region12.page.html',
  styleUrls: ['./region12.page.scss'],
})
export class Region12Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'NORTH COTABATO', link: '/n-cotabato', img: 'assets/r12.1.jpg' },
    { name: 'SARANGANI', link: '/sarangani', img: 'assets/r12.2.jpg'},
    { name: 'SOUTH COTABATO', link: '/s-cotabato', img: 'assets/r12.3.jpg' },
    { name: 'SULTAN KUDARAT', link: '/sultan-kudarat', img: 'assets/r12.4.jpg' },
  ];
  filteredCities: { name: string; link: string; img: string }[] = this.cities;
  

  constructor() { }

  ngOnInit() {}
  onSearchInput(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter((city) =>
      city.name.toLowerCase().includes(searchTerm)
    );
  }
}