import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aklan3Page } from './aklan3.page';

describe('Aklan3Page', () => {
  let component: Aklan3Page;
  let fixture: ComponentFixture<Aklan3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Aklan3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
