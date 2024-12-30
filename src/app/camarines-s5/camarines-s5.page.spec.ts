import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesS5Page } from './camarines-s5.page';

describe('CamarinesS5Page', () => {
  let component: CamarinesS5Page;
  let fixture: ComponentFixture<CamarinesS5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesS5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
