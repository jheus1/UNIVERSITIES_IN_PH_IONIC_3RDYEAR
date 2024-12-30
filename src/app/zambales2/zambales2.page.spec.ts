import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Zambales2Page } from './zambales2.page';

describe('Zambales2Page', () => {
  let component: Zambales2Page;
  let fixture: ComponentFixture<Zambales2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Zambales2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
