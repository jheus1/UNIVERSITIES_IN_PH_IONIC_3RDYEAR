import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SCotabatoPage } from './s-cotabato.page';

describe('SCotabatoPage', () => {
  let component: SCotabatoPage;
  let fixture: ComponentFixture<SCotabatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SCotabatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
