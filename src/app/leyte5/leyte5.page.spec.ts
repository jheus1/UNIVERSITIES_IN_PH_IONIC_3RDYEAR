import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leyte5Page } from './leyte5.page';

describe('Leyte5Page', () => {
  let component: Leyte5Page;
  let fixture: ComponentFixture<Leyte5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Leyte5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
