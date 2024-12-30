import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BataanPage } from './bataan.page';

describe('BataanPage', () => {
  let component: BataanPage;
  let fixture: ComponentFixture<BataanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BataanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
