import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rizal4Page } from './rizal4.page';

describe('Rizal4Page', () => {
  let component: Rizal4Page;
  let fixture: ComponentFixture<Rizal4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rizal4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
