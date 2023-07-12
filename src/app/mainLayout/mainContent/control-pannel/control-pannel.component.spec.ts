import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPannelComponent } from './control-pannel.component';

describe('ControlPannelComponent', () => {
  let component: ControlPannelComponent;
  let fixture: ComponentFixture<ControlPannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlPannelComponent]
    });
    fixture = TestBed.createComponent(ControlPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
