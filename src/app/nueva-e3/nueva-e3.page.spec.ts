import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaE3Page } from './nueva-e3.page';

describe('NuevaE3Page', () => {
  let component: NuevaE3Page;
  let fixture: ComponentFixture<NuevaE3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaE3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
