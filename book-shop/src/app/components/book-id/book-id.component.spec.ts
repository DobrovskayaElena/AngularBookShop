import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIdComponent } from './book-id.component';

describe('BookIdComponent', () => {
  let component: BookIdComponent;
  let fixture: ComponentFixture<BookIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
