import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biliran10Page } from './biliran10.page';

describe('Biliran10Page', () => {
  let component: Biliran10Page;
  let fixture: ComponentFixture<Biliran10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Biliran10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
