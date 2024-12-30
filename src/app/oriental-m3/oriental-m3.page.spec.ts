import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrientalM3Page } from './oriental-m3.page';

describe('OrientalM3Page', () => {
  let component: OrientalM3Page;
  let fixture: ComponentFixture<OrientalM3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrientalM3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
