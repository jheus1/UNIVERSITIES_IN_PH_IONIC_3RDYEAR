import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cavite2Page } from './cavite2.page';

describe('Cavite2Page', () => {
  let component: Cavite2Page;
  let fixture: ComponentFixture<Cavite2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cavite2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
