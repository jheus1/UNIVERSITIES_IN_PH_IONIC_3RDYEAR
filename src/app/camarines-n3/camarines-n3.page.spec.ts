import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarinesN3Page } from './camarines-n3.page';

describe('CamarinesN3Page', () => {
  let component: CamarinesN3Page;
  let fixture: ComponentFixture<CamarinesN3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamarinesN3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
