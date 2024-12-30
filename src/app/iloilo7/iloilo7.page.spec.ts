import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iloilo7Page } from './iloilo7.page';

describe('Iloilo7Page', () => {
  let component: Iloilo7Page;
  let fixture: ComponentFixture<Iloilo7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Iloilo7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
