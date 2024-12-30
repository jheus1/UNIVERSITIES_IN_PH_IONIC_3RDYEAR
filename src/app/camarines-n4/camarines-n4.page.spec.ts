import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesN4Page } from './camarines-n4.page';

describe('CamarinesN4Page', () => {
  let component: CamarinesN4Page;
  let fixture: ComponentFixture<CamarinesN4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesN4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
