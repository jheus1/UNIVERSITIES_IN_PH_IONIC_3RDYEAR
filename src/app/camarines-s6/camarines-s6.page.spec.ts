import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesS6Page } from './camarines-s6.page';

describe('CamarinesS6Page', () => {
  let component: CamarinesS6Page;
  let fixture: ComponentFixture<CamarinesS6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesS6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
