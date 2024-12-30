import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bohol5Page } from './bohol5.page';

describe('Bohol5Page', () => {
  let component: Bohol5Page;
  let fixture: ComponentFixture<Bohol5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bohol5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
