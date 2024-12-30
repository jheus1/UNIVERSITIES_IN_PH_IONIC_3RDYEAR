import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaVPage } from './nueva-v.page';

describe('NuevaVPage', () => {
  let component: NuevaVPage;
  let fixture: ComponentFixture<NuevaVPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevaVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
