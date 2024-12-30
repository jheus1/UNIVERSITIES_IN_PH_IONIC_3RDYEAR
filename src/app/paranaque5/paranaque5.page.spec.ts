import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paranaque5Page } from './paranaque5.page';

describe('Paranaque5Page', () => {
  let component: Paranaque5Page;
  let fixture: ComponentFixture<Paranaque5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Paranaque5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
