import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaE1Page } from './nueva-e1.page';

describe('NuevaE1Page', () => {
  let component: NuevaE1Page;
  let fixture: ComponentFixture<NuevaE1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaE1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
