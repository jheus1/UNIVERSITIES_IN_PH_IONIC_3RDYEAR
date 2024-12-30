import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {
  cities: { name: string; link: string; img: string }[] = [
    { name: 'MANILA', link: '/page4', img: 'assets/ncr10.jpg' },
    { name: 'LAS PIÑAS', link: '/page15', img: 'assets/ncr1.jpg'},
    { name: 'MAKATI', link: '/page25', img: 'assets/ncr2.jpg' },
    { name: 'MALABON', link: '/page36', img: 'assets/ncr3.jpg' },
    { name: 'MANDALUYONG', link: '/page47', img: 'assets/ncr4.jpg' },
    { name: 'MARIKINA', link: '/marikina', img: 'assets/ncr5.jpg' },
    { name: 'MUNTINLUPA', link: '/muntinlupa', img: 'assets/ncr6.jpg' },
    { name: 'PARAÑAQUE', link: '/paranaque', img: 'assets/ncr7.jpg' },
    { name: 'PASAY', link: '/pasay', img: 'assets/ncr8.jpg' },
    { name: 'PASIG', link: '/pasig', img: 'assets/ncr9.jpg' },
  ];
  filteredCities: { name: string; link: string; img: string }[] = this.cities;

  constructor() {}

  ngOnInit() {}

  onSearchInput(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCities = this.cities.filter((city) =>
      city.name.toLowerCase().includes(searchTerm)
    );
  }
}
