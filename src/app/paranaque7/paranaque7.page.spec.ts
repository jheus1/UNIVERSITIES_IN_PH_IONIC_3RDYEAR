import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paranaque7Page } from './paranaque7.page';

describe('Paranaque7Page', () => {
  let component: Paranaque7Page;
  let fixture: ComponentFixture<Paranaque7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Paranaque7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
