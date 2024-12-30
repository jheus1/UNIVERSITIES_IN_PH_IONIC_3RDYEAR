import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Region8Page } from './region8.page';

describe('Region8Page', () => {
  let component: Region8Page;
  let fixture: ComponentFixture<Region8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Region8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
