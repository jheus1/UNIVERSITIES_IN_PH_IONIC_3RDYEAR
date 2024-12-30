import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntiquePage } from './antique.page';

describe('AntiquePage', () => {
  let component: AntiquePage;
  let fixture: ComponentFixture<AntiquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AntiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
