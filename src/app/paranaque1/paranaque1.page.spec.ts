import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paranaque1Page } from './paranaque1.page';

describe('Paranaque1Page', () => {
  let component: Paranaque1Page;
  let fixture: ComponentFixture<Paranaque1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Paranaque1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
