import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cavite6Page } from './cavite6.page';

describe('Cavite6Page', () => {
  let component: Cavite6Page;
  let fixture: ComponentFixture<Cavite6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cavite6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
