import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quezon3Page } from './quezon3.page';

describe('Quezon3Page', () => {
  let component: Quezon3Page;
  let fixture: ComponentFixture<Quezon3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quezon3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
