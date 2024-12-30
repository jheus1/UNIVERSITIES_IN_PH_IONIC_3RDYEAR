import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZambalesPage } from './zambales.page';

describe('ZambalesPage', () => {
  let component: ZambalesPage;
  let fixture: ComponentFixture<ZambalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZambalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
