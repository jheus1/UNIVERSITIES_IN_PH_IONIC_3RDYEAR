import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Region10Page } from './region10.page';

describe('Region10Page', () => {
  let component: Region10Page;
  let fixture: ComponentFixture<Region10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Region10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
