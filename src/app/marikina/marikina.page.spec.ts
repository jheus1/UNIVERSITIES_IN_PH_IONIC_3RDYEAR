import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarikinaPage } from './marikina.page';

describe('MarikinaPage', () => {
  let component: MarikinaPage;
  let fixture: ComponentFixture<MarikinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarikinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
