import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region8',
  templateUrl: './region8.page.html',
  styleUrls: ['./region8.page.scss'],
})
export class Region8Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'BILIRAN', link: '/biliran', img: 'assets/r8.1.jpg' },
    { name: 'EASTERN SAMAR', link: '/eastern-s', img: 'assets/r8.2.jpg'},
    { name: 'LEYTE', link: '/leyte', img: 'assets/r8.3.jpg' },
    { name: 'NORTHERN SAMAR', link: '/northern-s', img: 'assets/r8.4.jpg' },
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