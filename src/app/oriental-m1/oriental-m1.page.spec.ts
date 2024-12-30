import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrientalM1Page } from './oriental-m1.page';

describe('OrientalM1Page', () => {
  let component: OrientalM1Page;
  let fixture: ComponentFixture<OrientalM1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrientalM1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
