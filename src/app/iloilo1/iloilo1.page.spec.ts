import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iloilo1Page } from './iloilo1.page';

describe('Iloilo1Page', () => {
  let component: Iloilo1Page;
  let fixture: ComponentFixture<Iloilo1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Iloilo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
