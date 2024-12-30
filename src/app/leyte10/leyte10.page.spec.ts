import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leyte10Page } from './leyte10.page';

describe('Leyte10Page', () => {
  let component: Leyte10Page;
  let fixture: ComponentFixture<Leyte10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Leyte10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
