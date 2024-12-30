import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesN5Page } from './camarines-n5.page';

describe('CamarinesN5Page', () => {
  let component: CamarinesN5Page;
  let fixture: ComponentFixture<CamarinesN5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesN5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
