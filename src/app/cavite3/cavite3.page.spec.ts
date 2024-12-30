import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cavite3Page } from './cavite3.page';

describe('Cavite3Page', () => {
  let component: Cavite3Page;
  let fixture: ComponentFixture<Cavite3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cavite3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
