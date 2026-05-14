import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTompletComenet } from './admin-tomplet-comenet';

describe('AdminTompletComenet', () => {
  let component: AdminTompletComenet;
  let fixture: ComponentFixture<AdminTompletComenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTompletComenet],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTompletComenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
