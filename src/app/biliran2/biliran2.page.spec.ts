import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biliran2Page } from './biliran2.page';

describe('Biliran2Page', () => {
  let component: Biliran2Page;
  let fixture: ComponentFixture<Biliran2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Biliran2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
