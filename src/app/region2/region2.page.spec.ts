import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Region2Page } from './region2.page';

describe('Region2Page', () => {
  let component: Region2Page;
  let fixture: ComponentFixture<Region2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Region2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
