import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapizPage } from './capiz.page';

describe('CapizPage', () => {
  let component: CapizPage;
  let fixture: ComponentFixture<CapizPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CapizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
