import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quirino6Page } from './quirino6.page';

describe('Quirino6Page', () => {
  let component: Quirino6Page;
  let fixture: ComponentFixture<Quirino6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quirino6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
