import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaEPage } from './nueva-e.page';

describe('NuevaEPage', () => {
  let component: NuevaEPage;
  let fixture: ComponentFixture<NuevaEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
