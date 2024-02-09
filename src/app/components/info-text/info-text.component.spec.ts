import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTextComponent } from './info-text.component';

describe('InfoTextComponent', () => {
  let component: InfoTextComponent;
  let fixture: ComponentFixture<InfoTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InfoTextComponent]
    });
    fixture = TestBed.createComponent(InfoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
