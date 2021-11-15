import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBottomNavigationComponent } from './mobile-bottom-navigation.component';

describe('MobileBottomNavigationComponent', () => {
  let component: MobileBottomNavigationComponent;
  let fixture: ComponentFixture<MobileBottomNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBottomNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBottomNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
