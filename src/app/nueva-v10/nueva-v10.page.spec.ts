import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaV10Page } from './nueva-v10.page';

describe('NuevaV10Page', () => {
  let component: NuevaV10Page;
  let fixture: ComponentFixture<NuevaV10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaV10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
