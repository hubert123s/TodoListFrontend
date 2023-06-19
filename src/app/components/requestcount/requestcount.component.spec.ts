import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestcountComponent } from './requestcount.component';

describe('RequestcountComponent', () => {
  let component: RequestcountComponent;
  let fixture: ComponentFixture<RequestcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestcountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
