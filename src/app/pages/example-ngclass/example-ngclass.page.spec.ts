import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleNgclassPage } from './example-ngclass.page';

describe('ExampleNgclassPage', () => {
  let component: ExampleNgclassPage;
  let fixture: ComponentFixture<ExampleNgclassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExampleNgclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
