import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernSPage } from './northern-s.page';

describe('NorthernSPage', () => {
  let component: NorthernSPage;
  let fixture: ComponentFixture<NorthernSPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NorthernSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
