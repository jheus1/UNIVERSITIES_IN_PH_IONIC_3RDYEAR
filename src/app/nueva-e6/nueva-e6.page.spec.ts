import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaE6Page } from './nueva-e6.page';

describe('NuevaE6Page', () => {
  let component: NuevaE6Page;
  let fixture: ComponentFixture<NuevaE6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaE6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
