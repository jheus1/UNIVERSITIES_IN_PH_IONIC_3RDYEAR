import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Camiguin6Page } from './camiguin6.page';

describe('Camiguin6Page', () => {
  let component: Camiguin6Page;
  let fixture: ComponentFixture<Camiguin6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Camiguin6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
