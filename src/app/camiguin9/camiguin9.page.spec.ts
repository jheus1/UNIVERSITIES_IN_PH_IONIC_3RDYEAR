import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Camiguin9Page } from './camiguin9.page';

describe('Camiguin9Page', () => {
  let component: Camiguin9Page;
  let fixture: ComponentFixture<Camiguin9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Camiguin9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
