import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region3',
  templateUrl: './region3.page.html',
  styleUrls: ['./region3.page.scss'],
})
export class Region3Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'BATAAN', link: '/bataan', img: 'assets/r3.1.jpg' },
    { name: 'BULACAN', link: '/bulacan', img: 'assets/r3.2.jpg'},
    { name: 'NUEVA ECIJA', link: '/nueva-e', img: 'assets/r3.3.jpg' },
    { name: 'PAMPANGA', link: '/pampanga', img: 'assets/r3.4.jpg' },
    { name: 'TARLAC', link: '/tarlac', img: 'assets/r3.5.jpg' },
    { name: 'ZAMBALES', link: '/zambales', img: 'assets/r3.6.jpg' },
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