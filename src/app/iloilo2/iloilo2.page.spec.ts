import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iloilo2Page } from './iloilo2.page';

describe('Iloilo2Page', () => {
  let component: Iloilo2Page;
  let fixture: ComponentFixture<Iloilo2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Iloilo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
