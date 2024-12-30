import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamiguinPage } from './camiguin.page';

describe('CamiguinPage', () => {
  let component: CamiguinPage;
  let fixture: ComponentFixture<CamiguinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamiguinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
