import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuimarasPage } from './guimaras.page';

describe('GuimarasPage', () => {
  let component: GuimarasPage;
  let fixture: ComponentFixture<GuimarasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuimarasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
