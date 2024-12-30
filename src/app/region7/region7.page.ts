import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region7',
  templateUrl: './region7.page.html',
  styleUrls: ['./region7.page.scss'],
})
export class Region7Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'BOHOL', link: '/bohol', img: 'assets/r7.1.jpg' },
    { name: 'CEBU', link: '/cebu', img: 'assets/r7.2.jpg'},
    { name: 'NEGROS OCCIDENTAL', link: '/negros-ov', img: 'assets/r7.3.jpeg' },
    { name: 'SIQUIJOR', link: '/siquirjor', img: 'assets/r7.4.jpg' },
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