import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aklan8Page } from './aklan8.page';

describe('Aklan8Page', () => {
  let component: Aklan8Page;
  let fixture: ComponentFixture<Aklan8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Aklan8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
