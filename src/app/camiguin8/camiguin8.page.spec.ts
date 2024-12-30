import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Camiguin8Page } from './camiguin8.page';

describe('Camiguin8Page', () => {
  let component: Camiguin8Page;
  let fixture: ComponentFixture<Camiguin8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Camiguin8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
