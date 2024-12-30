import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParanaquePage } from './paranaque.page';

describe('ParanaquePage', () => {
  let component: ParanaquePage;
  let fixture: ComponentFixture<ParanaquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParanaquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
