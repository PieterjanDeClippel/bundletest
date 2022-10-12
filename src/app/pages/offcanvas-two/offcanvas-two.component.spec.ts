import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasTwoComponent } from './offcanvas-two.component';

describe('OffcanvasTwoComponent', () => {
  let component: OffcanvasTwoComponent;
  let fixture: ComponentFixture<OffcanvasTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcanvasTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffcanvasTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
