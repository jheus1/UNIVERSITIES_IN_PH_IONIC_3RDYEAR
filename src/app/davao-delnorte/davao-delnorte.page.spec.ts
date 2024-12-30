import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DavaoDelnortePage } from './davao-delnorte.page';

describe('DavaoDelnortePage', () => {
  let component: DavaoDelnortePage;
  let fixture: ComponentFixture<DavaoDelnortePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DavaoDelnortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
