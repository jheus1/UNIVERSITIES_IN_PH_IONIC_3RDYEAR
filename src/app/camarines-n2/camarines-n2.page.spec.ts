import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesN2Page } from './camarines-n2.page';

describe('CamarinesN2Page', () => {
  let component: CamarinesN2Page;
  let fixture: ComponentFixture<CamarinesN2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesN2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
