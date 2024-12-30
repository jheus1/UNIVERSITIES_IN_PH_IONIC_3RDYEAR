import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NCotabatoPage } from './n-cotabato.page';

describe('NCotabatoPage', () => {
  let component: NCotabatoPage;
  let fixture: ComponentFixture<NCotabatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NCotabatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
