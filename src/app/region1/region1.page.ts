import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region1',
  templateUrl: './region1.page.html',
  styleUrls: ['./region1.page.scss'],
})
export class Region1Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'ILOCOS NORTE', link: '/ilocos-n', img: 'assets/r1.1.jpg' },
    { name: 'ILOCOS SUR', link: '/ilocos-s', img: 'assets/r1.2.jpg'},
    { name: 'LA UNION', link: '/la-u', img: 'assets/r1.3.jpg' },
    { name: 'PANGASINAN', link: '/pangasinan', img: 'assets/r1.4.jpg' },
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
