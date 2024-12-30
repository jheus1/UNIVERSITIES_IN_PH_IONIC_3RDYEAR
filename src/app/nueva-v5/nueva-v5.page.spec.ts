import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaV5Page } from './nueva-v5.page';

describe('NuevaV5Page', () => {
  let component: NuevaV5Page;
  let fixture: ComponentFixture<NuevaV5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaV5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
