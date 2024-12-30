import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaE10Page } from './nueva-e10.page';

describe('NuevaE10Page', () => {
  let component: NuevaE10Page;
  let fixture: ComponentFixture<NuevaE10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaE10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
