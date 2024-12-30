import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region2',
  templateUrl: './region2.page.html',
  styleUrls: ['./region2.page.scss'],
})
export class Region2Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'CAGAYAN', link: '/cagayan', img: 'assets/r2.1.JPG' },
    { name: 'ISABELA', link: '/isabela', img: 'assets/r2.2.jpg'},
    { name: 'NUEVA VIZCAYA', link: '/nueva-v', img: 'assets/r2.3.jpg' },
    { name: 'QUIRINO', link: '/quirino', img: 'assets/r2.4.jpeg' },
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