import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rizal10Page } from './rizal10.page';

describe('Rizal10Page', () => {
  let component: Rizal10Page;
  let fixture: ComponentFixture<Rizal10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rizal10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
