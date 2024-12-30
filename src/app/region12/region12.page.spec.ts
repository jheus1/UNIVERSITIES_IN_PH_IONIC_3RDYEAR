import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Region12Page } from './region12.page';

describe('Region12Page', () => {
  let component: Region12Page;
  let fixture: ComponentFixture<Region12Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Region12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
