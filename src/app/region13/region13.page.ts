import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region13',
  templateUrl: './region13.page.html',
  styleUrls: ['./region13.page.scss'],
})
export class Region13Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'AGUSAN DEL NORTE', link: '/agusan-delnorte', img: 'assets/r13.1.jpg' },
    { name: 'AGUSAN DEL SUR', link: '/agusan-delsur', img: 'assets/r13.2.jpg'},
    { name: 'SURIGAO DEL SUR', link: '/surigao-delsur', img: 'assets/r13.3.JPG' },
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