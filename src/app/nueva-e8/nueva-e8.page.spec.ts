import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaE8Page } from './nueva-e8.page';

describe('NuevaE8Page', () => {
  let component: NuevaE8Page;
  let fixture: ComponentFixture<NuevaE8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaE8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
