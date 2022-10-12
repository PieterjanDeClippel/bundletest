import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasOneComponent } from './offcanvas-one.component';

describe('OffcanvasOneComponent', () => {
  let component: OffcanvasOneComponent;
  let fixture: ComponentFixture<OffcanvasOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcanvasOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffcanvasOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
