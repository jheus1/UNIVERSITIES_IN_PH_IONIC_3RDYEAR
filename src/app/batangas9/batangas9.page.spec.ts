import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Batangas9Page } from './batangas9.page';

describe('Batangas9Page', () => {
  let component: Batangas9Page;
  let fixture: ComponentFixture<Batangas9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Batangas9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
