import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasay10Page } from './pasay10.page';

describe('Pasay10Page', () => {
  let component: Pasay10Page;
  let fixture: ComponentFixture<Pasay10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasay10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
