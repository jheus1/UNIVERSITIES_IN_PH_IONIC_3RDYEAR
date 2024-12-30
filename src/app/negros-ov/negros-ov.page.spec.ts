import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOvPage } from './negros-ov.page';

describe('NegrosOvPage', () => {
  let component: NegrosOvPage;
  let fixture: ComponentFixture<NegrosOvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
