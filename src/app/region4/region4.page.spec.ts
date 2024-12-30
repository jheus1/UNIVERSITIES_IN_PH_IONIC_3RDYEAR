import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Region4Page } from './region4.page';

describe('Region4Page', () => {
  let component: Region4Page;
  let fixture: ComponentFixture<Region4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Region4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
