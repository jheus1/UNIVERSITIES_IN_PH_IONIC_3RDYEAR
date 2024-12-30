import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaV7Page } from './nueva-v7.page';

describe('NuevaV7Page', () => {
  let component: NuevaV7Page;
  let fixture: ComponentFixture<NuevaV7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaV7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
