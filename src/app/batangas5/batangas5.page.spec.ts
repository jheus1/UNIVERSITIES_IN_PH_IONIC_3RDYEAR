import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Batangas5Page } from './batangas5.page';

describe('Batangas5Page', () => {
  let component: Batangas5Page;
  let fixture: ComponentFixture<Batangas5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Batangas5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
