import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bohol9Page } from './bohol9.page';

describe('Bohol9Page', () => {
  let component: Bohol9Page;
  let fixture: ComponentFixture<Bohol9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bohol9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
