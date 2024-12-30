import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasay7Page } from './pasay7.page';

describe('Pasay7Page', () => {
  let component: Pasay7Page;
  let fixture: ComponentFixture<Pasay7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasay7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
