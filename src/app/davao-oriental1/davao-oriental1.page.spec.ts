import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DavaoOriental1Page } from './davao-oriental1.page';

describe('DavaoOriental1Page', () => {
  let component: DavaoOriental1Page;
  let fixture: ComponentFixture<DavaoOriental1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DavaoOriental1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
