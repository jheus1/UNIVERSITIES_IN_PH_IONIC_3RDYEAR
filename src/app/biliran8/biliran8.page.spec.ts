import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biliran8Page } from './biliran8.page';

describe('Biliran8Page', () => {
  let component: Biliran8Page;
  let fixture: ComponentFixture<Biliran8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Biliran8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
