import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cavite8Page } from './cavite8.page';

describe('Cavite8Page', () => {
  let component: Cavite8Page;
  let fixture: ComponentFixture<Cavite8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cavite8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
