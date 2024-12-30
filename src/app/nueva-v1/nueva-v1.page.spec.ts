import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaV1Page } from './nueva-v1.page';

describe('NuevaV1Page', () => {
  let component: NuevaV1Page;
  let fixture: ComponentFixture<NuevaV1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaV1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
