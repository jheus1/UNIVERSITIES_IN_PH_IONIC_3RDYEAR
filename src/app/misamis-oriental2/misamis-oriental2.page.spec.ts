import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisamisOriental2Page } from './misamis-oriental2.page';

describe('MisamisOriental2Page', () => {
  let component: MisamisOriental2Page;
  let fixture: ComponentFixture<MisamisOriental2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisamisOriental2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
