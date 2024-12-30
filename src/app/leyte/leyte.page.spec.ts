import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeytePage } from './leyte.page';

describe('LeytePage', () => {
  let component: LeytePage;
  let fixture: ComponentFixture<LeytePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeytePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
