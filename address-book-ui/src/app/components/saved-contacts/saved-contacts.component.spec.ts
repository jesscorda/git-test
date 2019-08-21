import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedContactsComponent } from './saved-contacts.component';

describe('SavedContactsComponent', () => {
  let component: SavedContactsComponent;
  let fixture: ComponentFixture<SavedContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
