import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgusanDelnortePage } from './agusan-delnorte.page';

describe('AgusanDelnortePage', () => {
  let component: AgusanDelnortePage;
  let fixture: ComponentFixture<AgusanDelnortePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgusanDelnortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
