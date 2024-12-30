import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bohol10Page } from './bohol10.page';

describe('Bohol10Page', () => {
  let component: Bohol10Page;
  let fixture: ComponentFixture<Bohol10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bohol10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
