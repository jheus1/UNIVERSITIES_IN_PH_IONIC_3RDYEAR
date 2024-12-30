import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasig9Page } from './pasig9.page';

describe('Pasig9Page', () => {
  let component: Pasig9Page;
  let fixture: ComponentFixture<Pasig9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasig9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
