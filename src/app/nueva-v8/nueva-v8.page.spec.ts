import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaV8Page } from './nueva-v8.page';

describe('NuevaV8Page', () => {
  let component: NuevaV8Page;
  let fixture: ComponentFixture<NuevaV8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaV8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
