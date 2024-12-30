import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaV9Page } from './nueva-v9.page';

describe('NuevaV9Page', () => {
  let component: NuevaV9Page;
  let fixture: ComponentFixture<NuevaV9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaV9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
