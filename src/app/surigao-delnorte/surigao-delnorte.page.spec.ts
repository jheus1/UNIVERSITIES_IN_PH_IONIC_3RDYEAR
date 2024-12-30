import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurigaoDelnortePage } from './surigao-delnorte.page';

describe('SurigaoDelnortePage', () => {
  let component: SurigaoDelnortePage;
  let fixture: ComponentFixture<SurigaoDelnortePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SurigaoDelnortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
