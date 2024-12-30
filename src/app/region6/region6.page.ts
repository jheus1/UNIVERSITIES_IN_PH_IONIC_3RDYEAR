import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region6',
  templateUrl: './region6.page.html',
  styleUrls: ['./region6.page.scss'],
})
export class Region6Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'AKLAN', link: '/aklan', img: 'assets/r6.1.jpg' },
    { name: 'ANTIQUE', link: '/antique', img: 'assets/r6.2.jpg'},
    { name: 'CAPIZ', link: '/capiz', img: 'assets/r6.3.jpg' },
    { name: 'GUIMARAS', link: '/guimaras', img: 'assets/r6.4.jpg' },
    { name: 'ILOILO', link: '/iloilo', img: 'assets/r6.5.jpg' },
    { name: 'NEGROS OCCIDENTAL', link: '/negros-o', img: 'assets/r6.6.jpg' },
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