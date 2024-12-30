import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Siquirjor1Page } from './siquirjor1.page';

describe('Siquirjor1Page', () => {
  let component: Siquirjor1Page;
  let fixture: ComponentFixture<Siquirjor1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Siquirjor1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
