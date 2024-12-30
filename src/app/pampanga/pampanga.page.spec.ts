import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PampangaPage } from './pampanga.page';

describe('PampangaPage', () => {
  let component: PampangaPage;
  let fixture: ComponentFixture<PampangaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PampangaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
