import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGorupComponent } from './button-gorup.component';

describe('ButtonGorupComponent', () => {
  let component: ButtonGorupComponent;
  let fixture: ComponentFixture<ButtonGorupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonGorupComponent]
    });
    fixture = TestBed.createComponent(ButtonGorupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
