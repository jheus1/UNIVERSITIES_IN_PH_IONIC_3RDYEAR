import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biliran1Page } from './biliran1.page';

describe('Biliran1Page', () => {
  let component: Biliran1Page;
  let fixture: ComponentFixture<Biliran1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Biliran1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
