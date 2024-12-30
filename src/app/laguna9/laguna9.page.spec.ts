import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Laguna9Page } from './laguna9.page';

describe('Laguna9Page', () => {
  let component: Laguna9Page;
  let fixture: ComponentFixture<Laguna9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Laguna9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
