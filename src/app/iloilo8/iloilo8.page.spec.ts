import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iloilo8Page } from './iloilo8.page';

describe('Iloilo8Page', () => {
  let component: Iloilo8Page;
  let fixture: ComponentFixture<Iloilo8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Iloilo8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
