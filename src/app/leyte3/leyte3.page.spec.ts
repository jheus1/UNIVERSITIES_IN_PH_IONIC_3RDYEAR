import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leyte3Page } from './leyte3.page';

describe('Leyte3Page', () => {
  let component: Leyte3Page;
  let fixture: ComponentFixture<Leyte3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Leyte3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
