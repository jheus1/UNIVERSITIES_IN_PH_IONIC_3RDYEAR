import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paranaque8Page } from './paranaque8.page';

describe('Paranaque8Page', () => {
  let component: Paranaque8Page;
  let fixture: ComponentFixture<Paranaque8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Paranaque8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
