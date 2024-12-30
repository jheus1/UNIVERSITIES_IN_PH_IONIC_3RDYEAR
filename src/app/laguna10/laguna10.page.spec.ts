import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Laguna10Page } from './laguna10.page';

describe('Laguna10Page', () => {
  let component: Laguna10Page;
  let fixture: ComponentFixture<Laguna10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Laguna10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
