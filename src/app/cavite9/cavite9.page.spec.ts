import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cavite9Page } from './cavite9.page';

describe('Cavite9Page', () => {
  let component: Cavite9Page;
  let fixture: ComponentFixture<Cavite9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cavite9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
