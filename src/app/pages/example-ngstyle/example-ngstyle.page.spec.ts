import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleNgstylePage } from './example-ngstyle.page';

describe('ExampleNgstylePage', () => {
  let component: ExampleNgstylePage;
  let fixture: ComponentFixture<ExampleNgstylePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExampleNgstylePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
