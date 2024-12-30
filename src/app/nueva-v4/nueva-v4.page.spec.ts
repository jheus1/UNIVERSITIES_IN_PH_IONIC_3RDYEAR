import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaV4Page } from './nueva-v4.page';

describe('NuevaV4Page', () => {
  let component: NuevaV4Page;
  let fixture: ComponentFixture<NuevaV4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaV4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
