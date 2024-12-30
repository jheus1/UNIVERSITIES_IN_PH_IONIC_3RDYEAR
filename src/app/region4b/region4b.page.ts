import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region4b',
  templateUrl: './region4b.page.html',
  styleUrls: ['./region4b.page.scss'],
})
export class Region4bPage implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'OCCINDENTAL MINDORO', link: '/occcidental-m', img: 'assets/r4b.1.jpg' },
    { name: 'ORIENTAL MINDORO', link: '/oriental-m', img: 'assets/r4b.2.jpg'},
    { name: 'MARINDUQUE', link: '/marinduque', img: 'assets/r4b.3.jpg' },
    { name: 'PALAWAN', link: '/palawan', img: 'assets/r4b.4.jpg' },
    { name: 'ROMBLON', link: '/roblon', img: 'assets/r4b.5.jpg' },
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