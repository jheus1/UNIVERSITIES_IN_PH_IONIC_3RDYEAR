import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region9',
  templateUrl: './region9.page.html',
  styleUrls: ['./region9.page.scss'],
})
export class Region9Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'ZAMBOANGA DEL NORTE', link: '/zamboanga-delnorte', img: 'assets/r9.1.jpg' },
    { name: 'ZAMBOANGA DEL SUR', link: '/zamboanga-delsur', img: 'assets/r9.2.jpg'},
    { name: 'ZAMBOANGA SIBUNGAY', link: '/zamboanga-s', img: 'assets/r9.3.jpg' },
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
