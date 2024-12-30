import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Paranaque2Page } from './paranaque2.page';

describe('Paranaque2Page', () => {
  let component: Paranaque2Page;
  let fixture: ComponentFixture<Paranaque2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Paranaque2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
