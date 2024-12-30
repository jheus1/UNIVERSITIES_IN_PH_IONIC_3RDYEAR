import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rizal1Page } from './rizal1.page';

describe('Rizal1Page', () => {
  let component: Rizal1Page;
  let fixture: ComponentFixture<Rizal1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rizal1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
