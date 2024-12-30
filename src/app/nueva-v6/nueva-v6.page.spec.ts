import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaV6Page } from './nueva-v6.page';

describe('NuevaV6Page', () => {
  let component: NuevaV6Page;
  let fixture: ComponentFixture<NuevaV6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaV6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
