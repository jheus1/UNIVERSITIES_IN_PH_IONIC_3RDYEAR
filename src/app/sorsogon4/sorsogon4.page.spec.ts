import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sorsogon4Page } from './sorsogon4.page';

describe('Sorsogon4Page', () => {
  let component: Sorsogon4Page;
  let fixture: ComponentFixture<Sorsogon4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sorsogon4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
