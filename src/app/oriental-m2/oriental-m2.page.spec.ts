import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrientalM2Page } from './oriental-m2.page';

describe('OrientalM2Page', () => {
  let component: OrientalM2Page;
  let fixture: ComponentFixture<OrientalM2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrientalM2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
