import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsOffcanvasComponent } from './bs-offcanvas.component';

describe('BsOffcanvasComponent', () => {
  let component: BsOffcanvasComponent;
  let fixture: ComponentFixture<BsOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsOffcanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
