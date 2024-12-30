import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leyte7Page } from './leyte7.page';

describe('Leyte7Page', () => {
  let component: Leyte7Page;
  let fixture: ComponentFixture<Leyte7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Leyte7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
