import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Quirino3Page } from './quirino3.page';

describe('Quirino3Page', () => {
  let component: Quirino3Page;
  let fixture: ComponentFixture<Quirino3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Quirino3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
