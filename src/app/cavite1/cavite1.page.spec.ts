import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cavite1Page } from './cavite1.page';

describe('Cavite1Page', () => {
  let component: Cavite1Page;
  let fixture: ComponentFixture<Cavite1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cavite1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
