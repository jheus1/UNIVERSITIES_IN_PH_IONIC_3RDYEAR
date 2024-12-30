import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quezon7Page } from './quezon7.page';

describe('Quezon7Page', () => {
  let component: Quezon7Page;
  let fixture: ComponentFixture<Quezon7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quezon7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
