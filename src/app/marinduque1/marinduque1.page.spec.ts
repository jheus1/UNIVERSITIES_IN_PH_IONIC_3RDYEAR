import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marinduque1Page } from './marinduque1.page';

describe('Marinduque1Page', () => {
  let component: Marinduque1Page;
  let fixture: ComponentFixture<Marinduque1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marinduque1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
