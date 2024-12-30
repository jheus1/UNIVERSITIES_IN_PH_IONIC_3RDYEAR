import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasay8Page } from './pasay8.page';

describe('Pasay8Page', () => {
  let component: Pasay8Page;
  let fixture: ComponentFixture<Pasay8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasay8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
