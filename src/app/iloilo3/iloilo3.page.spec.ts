import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iloilo3Page } from './iloilo3.page';

describe('Iloilo3Page', () => {
  let component: Iloilo3Page;
  let fixture: ComponentFixture<Iloilo3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Iloilo3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
