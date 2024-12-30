import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Camiguin10Page } from './camiguin10.page';

describe('Camiguin10Page', () => {
  let component: Camiguin10Page;
  let fixture: ComponentFixture<Camiguin10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Camiguin10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
