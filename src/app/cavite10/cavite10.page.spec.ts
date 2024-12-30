import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cavite10Page } from './cavite10.page';

describe('Cavite10Page', () => {
  let component: Cavite10Page;
  let fixture: ComponentFixture<Cavite10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cavite10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
