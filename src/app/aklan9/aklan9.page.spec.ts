import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aklan9Page } from './aklan9.page';

describe('Aklan9Page', () => {
  let component: Aklan9Page;
  let fixture: ComponentFixture<Aklan9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Aklan9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
