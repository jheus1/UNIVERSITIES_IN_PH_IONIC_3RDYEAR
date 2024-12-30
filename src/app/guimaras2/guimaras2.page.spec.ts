import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Guimaras2Page } from './guimaras2.page';

describe('Guimaras2Page', () => {
  let component: Guimaras2Page;
  let fixture: ComponentFixture<Guimaras2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Guimaras2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
