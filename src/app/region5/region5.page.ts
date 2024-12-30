import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region5',
  templateUrl: './region5.page.html',
  styleUrls: ['./region5.page.scss'],
})
export class Region5Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'ALBAY', link: '/albay', img: 'assets/r5.1.jpg' },
    { name: 'CAMARINES NORTE', link: '/camarines-n', img: 'assets/r5.2.jpg'},
    { name: 'CAMARINES SUR', link: '/camarines-s', img: 'assets/r5.3.jpg' },
    { name: 'CATANDUANES', link: '/catanduanes', img: 'assets/r5.4.jpg' },
    { name: 'MASBATE', link: '/masbate', img: 'assets/r5.5.jpg' },
    { name: 'SORSOGON', link: '/sorsogon', img: 'assets/r5.6.jpg' },
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