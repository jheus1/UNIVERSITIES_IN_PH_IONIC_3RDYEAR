import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Guimaras3Page } from './guimaras3.page';

describe('Guimaras3Page', () => {
  let component: Guimaras3Page;
  let fixture: ComponentFixture<Guimaras3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Guimaras3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
