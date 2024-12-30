import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bohol2Page } from './bohol2.page';

describe('Bohol2Page', () => {
  let component: Bohol2Page;
  let fixture: ComponentFixture<Bohol2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bohol2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
