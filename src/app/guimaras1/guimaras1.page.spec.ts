import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Guimaras1Page } from './guimaras1.page';

describe('Guimaras1Page', () => {
  let component: Guimaras1Page;
  let fixture: ComponentFixture<Guimaras1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Guimaras1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
