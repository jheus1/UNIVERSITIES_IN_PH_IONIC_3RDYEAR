import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biliran5Page } from './biliran5.page';

describe('Biliran5Page', () => {
  let component: Biliran5Page;
  let fixture: ComponentFixture<Biliran5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Biliran5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
