import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aklan2Page } from './aklan2.page';

describe('Aklan2Page', () => {
  let component: Aklan2Page;
  let fixture: ComponentFixture<Aklan2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Aklan2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
