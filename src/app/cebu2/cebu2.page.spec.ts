import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cebu2Page } from './cebu2.page';

describe('Cebu2Page', () => {
  let component: Cebu2Page;
  let fixture: ComponentFixture<Cebu2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cebu2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
