import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaE2Page } from './nueva-e2.page';

describe('NuevaE2Page', () => {
  let component: NuevaE2Page;
  let fixture: ComponentFixture<NuevaE2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaE2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
