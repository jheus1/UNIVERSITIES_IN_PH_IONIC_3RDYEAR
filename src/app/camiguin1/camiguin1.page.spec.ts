import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Camiguin1Page } from './camiguin1.page';

describe('Camiguin1Page', () => {
  let component: Camiguin1Page;
  let fixture: ComponentFixture<Camiguin1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Camiguin1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
