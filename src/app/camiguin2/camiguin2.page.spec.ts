import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Camiguin2Page } from './camiguin2.page';

describe('Camiguin2Page', () => {
  let component: Camiguin2Page;
  let fixture: ComponentFixture<Camiguin2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Camiguin2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
