import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paranaque10Page } from './paranaque10.page';

describe('Paranaque10Page', () => {
  let component: Paranaque10Page;
  let fixture: ComponentFixture<Paranaque10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Paranaque10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
