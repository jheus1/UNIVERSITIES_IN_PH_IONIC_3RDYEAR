import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisamisOccidentalPage } from './misamis-occidental.page';

describe('MisamisOccidentalPage', () => {
  let component: MisamisOccidentalPage;
  let fixture: ComponentFixture<MisamisOccidentalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisamisOccidentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
