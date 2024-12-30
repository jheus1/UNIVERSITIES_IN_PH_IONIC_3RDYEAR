import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesS2Page } from './camarines-s2.page';

describe('CamarinesS2Page', () => {
  let component: CamarinesS2Page;
  let fixture: ComponentFixture<CamarinesS2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesS2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
