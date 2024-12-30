import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quirino2Page } from './quirino2.page';

describe('Quirino2Page', () => {
  let component: Quirino2Page;
  let fixture: ComponentFixture<Quirino2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quirino2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
