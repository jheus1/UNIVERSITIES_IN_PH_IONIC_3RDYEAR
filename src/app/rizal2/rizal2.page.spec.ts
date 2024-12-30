import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rizal2Page } from './rizal2.page';

describe('Rizal2Page', () => {
  let component: Rizal2Page;
  let fixture: ComponentFixture<Rizal2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rizal2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
