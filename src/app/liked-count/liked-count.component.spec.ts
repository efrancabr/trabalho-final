import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedCountComponent } from './liked-count.component';

describe('LikedCountComponent', () => {
  let component: LikedCountComponent;
  let fixture: ComponentFixture<LikedCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
