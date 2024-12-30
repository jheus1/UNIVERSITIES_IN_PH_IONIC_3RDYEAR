import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biliran9Page } from './biliran9.page';

describe('Biliran9Page', () => {
  let component: Biliran9Page;
  let fixture: ComponentFixture<Biliran9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Biliran9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
