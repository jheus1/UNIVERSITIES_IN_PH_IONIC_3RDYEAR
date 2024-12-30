import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bulacan5Page } from './bulacan5.page';

describe('Bulacan5Page', () => {
  let component: Bulacan5Page;
  let fixture: ComponentFixture<Bulacan5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Bulacan5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
