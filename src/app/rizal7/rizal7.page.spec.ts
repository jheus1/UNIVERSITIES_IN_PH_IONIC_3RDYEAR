import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rizal7Page } from './rizal7.page';

describe('Rizal7Page', () => {
  let component: Rizal7Page;
  let fixture: ComponentFixture<Rizal7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rizal7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
