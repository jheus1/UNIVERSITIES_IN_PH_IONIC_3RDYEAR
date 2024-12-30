import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaE5Page } from './nueva-e5.page';

describe('NuevaE5Page', () => {
  let component: NuevaE5Page;
  let fixture: ComponentFixture<NuevaE5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaE5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
