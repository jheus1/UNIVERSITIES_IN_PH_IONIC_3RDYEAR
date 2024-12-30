import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Marinduque2Page } from './marinduque2.page';

describe('Marinduque2Page', () => {
  let component: Marinduque2Page;
  let fixture: ComponentFixture<Marinduque2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Marinduque2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
