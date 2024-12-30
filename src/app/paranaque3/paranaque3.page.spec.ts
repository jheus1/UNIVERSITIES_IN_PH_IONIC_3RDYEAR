import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paranaque3Page } from './paranaque3.page';

describe('Paranaque3Page', () => {
  let component: Paranaque3Page;
  let fixture: ComponentFixture<Paranaque3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Paranaque3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
