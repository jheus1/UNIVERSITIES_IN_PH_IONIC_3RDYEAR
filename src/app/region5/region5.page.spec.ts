import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Region5Page } from './region5.page';

describe('Region5Page', () => {
  let component: Region5Page;
  let fixture: ComponentFixture<Region5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Region5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
