import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region11',
  templateUrl: './region11.page.html',
  styleUrls: ['./region11.page.scss'],
})
export class Region11Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'DAVAO DEL NORTE', link: '/davao-delnorte', img: 'assets/r11.1.jpg' },
    { name: 'DAVAO DEL SUR', link: '/davao-delsur', img: 'assets/r11.2.jpg'},
    { name: 'DAVAO OCCIDENTAL', link: '/davao-occidental', img: 'assets/r11.3.JPG' },
    { name: 'DAVAO ORIENTAL', link: '/davao-oriental', img: 'assets/r11.4.jpg' },
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