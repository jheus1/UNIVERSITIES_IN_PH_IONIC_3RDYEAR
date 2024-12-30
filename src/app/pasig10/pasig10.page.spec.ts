import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasig10Page } from './pasig10.page';

describe('Pasig10Page', () => {
  let component: Pasig10Page;
  let fixture: ComponentFixture<Pasig10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasig10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
