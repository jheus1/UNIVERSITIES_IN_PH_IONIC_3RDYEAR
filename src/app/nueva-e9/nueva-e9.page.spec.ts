import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaE9Page } from './nueva-e9.page';

describe('NuevaE9Page', () => {
  let component: NuevaE9Page;
  let fixture: ComponentFixture<NuevaE9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaE9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
