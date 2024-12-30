import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paranaque4Page } from './paranaque4.page';

describe('Paranaque4Page', () => {
  let component: Paranaque4Page;
  let fixture: ComponentFixture<Paranaque4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Paranaque4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
