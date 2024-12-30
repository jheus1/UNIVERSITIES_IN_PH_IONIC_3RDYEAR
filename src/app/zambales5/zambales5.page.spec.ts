import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Zambales5Page } from './zambales5.page';

describe('Zambales5Page', () => {
  let component: Zambales5Page;
  let fixture: ComponentFixture<Zambales5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Zambales5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
