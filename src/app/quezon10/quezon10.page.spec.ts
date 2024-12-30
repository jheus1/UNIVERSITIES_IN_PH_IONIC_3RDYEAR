import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quezon10Page } from './quezon10.page';

describe('Quezon10Page', () => {
  let component: Quezon10Page;
  let fixture: ComponentFixture<Quezon10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quezon10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
