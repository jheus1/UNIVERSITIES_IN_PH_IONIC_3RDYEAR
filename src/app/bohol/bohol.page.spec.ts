import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoholPage } from './bohol.page';

describe('BoholPage', () => {
  let component: BoholPage;
  let fixture: ComponentFixture<BoholPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoholPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
