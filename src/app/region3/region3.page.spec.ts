import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Region3Page } from './region3.page';

describe('Region3Page', () => {
  let component: Region3Page;
  let fixture: ComponentFixture<Region3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Region3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
