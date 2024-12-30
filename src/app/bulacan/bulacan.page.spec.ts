import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BulacanPage } from './bulacan.page';

describe('BulacanPage', () => {
  let component: BulacanPage;
  let fixture: ComponentFixture<BulacanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BulacanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
