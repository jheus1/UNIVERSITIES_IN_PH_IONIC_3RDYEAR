import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Laguna4Page } from './laguna4.page';

describe('Laguna4Page', () => {
  let component: Laguna4Page;
  let fixture: ComponentFixture<Laguna4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Laguna4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
