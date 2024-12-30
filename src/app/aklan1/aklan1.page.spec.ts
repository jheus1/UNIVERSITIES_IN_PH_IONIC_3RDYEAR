import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aklan1Page } from './aklan1.page';

describe('Aklan1Page', () => {
  let component: Aklan1Page;
  let fixture: ComponentFixture<Aklan1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Aklan1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
