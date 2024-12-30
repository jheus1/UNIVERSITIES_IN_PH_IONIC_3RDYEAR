import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Laguna6Page } from './laguna6.page';

describe('Laguna6Page', () => {
  let component: Laguna6Page;
  let fixture: ComponentFixture<Laguna6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Laguna6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
