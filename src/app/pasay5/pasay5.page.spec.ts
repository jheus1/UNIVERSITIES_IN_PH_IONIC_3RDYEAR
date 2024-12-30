import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasay5Page } from './pasay5.page';

describe('Pasay5Page', () => {
  let component: Pasay5Page;
  let fixture: ComponentFixture<Pasay5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasay5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
