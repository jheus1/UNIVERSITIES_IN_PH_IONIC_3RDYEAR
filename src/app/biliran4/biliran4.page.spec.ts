import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Biliran4Page } from './biliran4.page';

describe('Biliran4Page', () => {
  let component: Biliran4Page;
  let fixture: ComponentFixture<Biliran4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Biliran4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
