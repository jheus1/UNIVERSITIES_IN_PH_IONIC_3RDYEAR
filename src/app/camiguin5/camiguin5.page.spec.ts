import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Camiguin5Page } from './camiguin5.page';

describe('Camiguin5Page', () => {
  let component: Camiguin5Page;
  let fixture: ComponentFixture<Camiguin5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Camiguin5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
