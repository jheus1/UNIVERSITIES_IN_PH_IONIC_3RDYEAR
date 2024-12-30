import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iloilo4Page } from './iloilo4.page';

describe('Iloilo4Page', () => {
  let component: Iloilo4Page;
  let fixture: ComponentFixture<Iloilo4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Iloilo4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
