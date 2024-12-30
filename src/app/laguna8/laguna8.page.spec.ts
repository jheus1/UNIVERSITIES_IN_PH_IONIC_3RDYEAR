import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Laguna8Page } from './laguna8.page';

describe('Laguna8Page', () => {
  let component: Laguna8Page;
  let fixture: ComponentFixture<Laguna8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Laguna8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
