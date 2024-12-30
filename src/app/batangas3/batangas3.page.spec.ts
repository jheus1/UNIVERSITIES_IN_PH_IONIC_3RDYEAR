import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Batangas3Page } from './batangas3.page';

describe('Batangas3Page', () => {
  let component: Batangas3Page;
  let fixture: ComponentFixture<Batangas3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Batangas3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
