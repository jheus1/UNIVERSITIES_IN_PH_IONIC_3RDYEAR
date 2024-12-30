import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Region9Page } from './region9.page';

describe('Region9Page', () => {
  let component: Region9Page;
  let fixture: ComponentFixture<Region9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Region9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
