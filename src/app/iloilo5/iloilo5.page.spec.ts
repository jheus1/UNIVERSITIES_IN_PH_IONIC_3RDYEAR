import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Iloilo5Page } from './iloilo5.page';

describe('Iloilo5Page', () => {
  let component: Iloilo5Page;
  let fixture: ComponentFixture<Iloilo5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Iloilo5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
