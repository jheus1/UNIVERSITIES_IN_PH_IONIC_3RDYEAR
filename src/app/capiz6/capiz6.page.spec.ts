import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Capiz6Page } from './capiz6.page';

describe('Capiz6Page', () => {
  let component: Capiz6Page;
  let fixture: ComponentFixture<Capiz6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Capiz6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
