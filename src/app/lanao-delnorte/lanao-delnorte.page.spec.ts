import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanaoDelnortePage } from './lanao-delnorte.page';

describe('LanaoDelnortePage', () => {
  let component: LanaoDelnortePage;
  let fixture: ComponentFixture<LanaoDelnortePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LanaoDelnortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
