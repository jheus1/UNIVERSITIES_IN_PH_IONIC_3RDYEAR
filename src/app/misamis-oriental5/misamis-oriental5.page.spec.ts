import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisamisOriental5Page } from './misamis-oriental5.page';

describe('MisamisOriental5Page', () => {
  let component: MisamisOriental5Page;
  let fixture: ComponentFixture<MisamisOriental5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisamisOriental5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
