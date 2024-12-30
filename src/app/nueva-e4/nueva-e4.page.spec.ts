import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaE4Page } from './nueva-e4.page';

describe('NuevaE4Page', () => {
  let component: NuevaE4Page;
  let fixture: ComponentFixture<NuevaE4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaE4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
