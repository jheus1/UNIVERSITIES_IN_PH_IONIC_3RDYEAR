import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bohol4Page } from './bohol4.page';

describe('Bohol4Page', () => {
  let component: Bohol4Page;
  let fixture: ComponentFixture<Bohol4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bohol4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
