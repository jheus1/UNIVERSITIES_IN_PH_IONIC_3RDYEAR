import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cavite5Page } from './cavite5.page';

describe('Cavite5Page', () => {
  let component: Cavite5Page;
  let fixture: ComponentFixture<Cavite5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cavite5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
