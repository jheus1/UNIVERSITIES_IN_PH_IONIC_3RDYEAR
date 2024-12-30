import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sarangani1Page } from './sarangani1.page';

describe('Sarangani1Page', () => {
  let component: Sarangani1Page;
  let fixture: ComponentFixture<Sarangani1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Sarangani1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
