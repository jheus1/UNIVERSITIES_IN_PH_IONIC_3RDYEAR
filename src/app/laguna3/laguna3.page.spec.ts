import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Laguna3Page } from './laguna3.page';

describe('Laguna3Page', () => {
  let component: Laguna3Page;
  let fixture: ComponentFixture<Laguna3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Laguna3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
