import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Albay2Page } from './albay2.page';

describe('Albay2Page', () => {
  let component: Albay2Page;
  let fixture: ComponentFixture<Albay2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Albay2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
