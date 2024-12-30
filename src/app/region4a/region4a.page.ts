import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region4a',
  templateUrl: './region4a.page.html',
  styleUrls: ['./region4a.page.scss'],
})
export class Region4aPage implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'CAVITE', link: '/cavite', img: 'assets/r4.1.JPG' },
    { name: 'LAGUNA', link: '/laguna', img: 'assets/r4.2.jpg'},
    { name: 'BATANGAS', link: '/batangas', img: 'assets/r4.3.jpg' },
    { name: 'RIZAL', link: '/rizal', img: 'assets/r4.4.jpg' },
    { name: 'QUEZON', link: '/quezon', img: 'assets/r4.5.jpg' },
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