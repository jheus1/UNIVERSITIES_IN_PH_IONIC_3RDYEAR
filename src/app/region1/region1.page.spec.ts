import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Region1Page } from './region1.page';

describe('Region1Page', () => {
  let component: Region1Page;
  let fixture: ComponentFixture<Region1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Region1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
