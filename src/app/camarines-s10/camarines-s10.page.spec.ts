import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesS10Page } from './camarines-s10.page';

describe('CamarinesS10Page', () => {
  let component: CamarinesS10Page;
  let fixture: ComponentFixture<CamarinesS10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesS10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
