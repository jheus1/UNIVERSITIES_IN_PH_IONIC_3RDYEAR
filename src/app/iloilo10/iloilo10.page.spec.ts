import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iloilo10Page } from './iloilo10.page';

describe('Iloilo10Page', () => {
  let component: Iloilo10Page;
  let fixture: ComponentFixture<Iloilo10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Iloilo10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
