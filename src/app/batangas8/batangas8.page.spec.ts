import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Batangas8Page } from './batangas8.page';

describe('Batangas8Page', () => {
  let component: Batangas8Page;
  let fixture: ComponentFixture<Batangas8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Batangas8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
