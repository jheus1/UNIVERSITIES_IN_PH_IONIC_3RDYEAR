import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iloilo9Page } from './iloilo9.page';

describe('Iloilo9Page', () => {
  let component: Iloilo9Page;
  let fixture: ComponentFixture<Iloilo9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Iloilo9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
