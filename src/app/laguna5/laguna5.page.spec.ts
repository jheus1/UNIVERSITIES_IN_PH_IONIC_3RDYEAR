import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Laguna5Page } from './laguna5.page';

describe('Laguna5Page', () => {
  let component: Laguna5Page;
  let fixture: ComponentFixture<Laguna5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Laguna5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
