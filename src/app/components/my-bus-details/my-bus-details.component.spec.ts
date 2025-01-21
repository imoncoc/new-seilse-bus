import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBusDetailsComponent } from './my-bus-details.component';

describe('MyBusDetailsComponent', () => {
  let component: MyBusDetailsComponent;
  let fixture: ComponentFixture<MyBusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
