import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernS1Page } from './northern-s1.page';

describe('NorthernS1Page', () => {
  let component: NorthernS1Page;
  let fixture: ComponentFixture<NorthernS1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NorthernS1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
