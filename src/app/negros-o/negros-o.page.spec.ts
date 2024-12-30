import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NegrosOPage } from './negros-o.page';

describe('NegrosOPage', () => {
  let component: NegrosOPage;
  let fixture: ComponentFixture<NegrosOPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NegrosOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
