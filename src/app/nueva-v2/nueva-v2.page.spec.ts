import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaV2Page } from './nueva-v2.page';

describe('NuevaV2Page', () => {
  let component: NuevaV2Page;
  let fixture: ComponentFixture<NuevaV2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaV2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
