import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aklan4Page } from './aklan4.page';

describe('Aklan4Page', () => {
  let component: Aklan4Page;
  let fixture: ComponentFixture<Aklan4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Aklan4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
