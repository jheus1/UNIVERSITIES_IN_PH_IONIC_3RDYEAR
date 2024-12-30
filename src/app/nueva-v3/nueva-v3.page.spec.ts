import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaV3Page } from './nueva-v3.page';

describe('NuevaV3Page', () => {
  let component: NuevaV3Page;
  let fixture: ComponentFixture<NuevaV3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaV3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
