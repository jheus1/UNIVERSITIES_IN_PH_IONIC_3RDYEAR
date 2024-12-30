import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesN1Page } from './camarines-n1.page';

describe('CamarinesN1Page', () => {
  let component: CamarinesN1Page;
  let fixture: ComponentFixture<CamarinesN1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesN1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
