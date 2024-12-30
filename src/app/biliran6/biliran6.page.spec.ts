import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biliran6Page } from './biliran6.page';

describe('Biliran6Page', () => {
  let component: Biliran6Page;
  let fixture: ComponentFixture<Biliran6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Biliran6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
