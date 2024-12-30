import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region10',
  templateUrl: './region10.page.html',
  styleUrls: ['./region10.page.scss'],
})
export class Region10Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'BUKIDNON', link: '/bukidnon', img: 'assets/r10.1.jpg' },
    { name: 'CAMIGUIN', link: '/camiguin', img: 'assets/r10.2.jpg'},
    { name: 'LANAO DEL NORTE', link: '/lanao-delnorte', img: 'assets/r10.3.jpg' },
    { name: 'MISAMIS OCCIDENTAL', link: '/misamis-occidental', img: 'assets/r10.4.jpg' },
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

