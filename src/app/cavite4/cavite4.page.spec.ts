import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cavite4Page } from './cavite4.page';

describe('Cavite4Page', () => {
  let component: Cavite4Page;
  let fixture: ComponentFixture<Cavite4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cavite4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
