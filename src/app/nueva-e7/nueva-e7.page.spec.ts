import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaE7Page } from './nueva-e7.page';

describe('NuevaE7Page', () => {
  let component: NuevaE7Page;
  let fixture: ComponentFixture<NuevaE7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaE7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
