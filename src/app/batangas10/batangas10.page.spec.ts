import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Batangas10Page } from './batangas10.page';

describe('Batangas10Page', () => {
  let component: Batangas10Page;
  let fixture: ComponentFixture<Batangas10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Batangas10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
