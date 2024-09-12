import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GWConfigurationComponent } from './gwconfiguration.component';

describe('GWConfigurationComponent', () => {
  let component: GWConfigurationComponent;
  let fixture: ComponentFixture<GWConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GWConfigurationComponent]
    });
    fixture = TestBed.createComponent(GWConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
