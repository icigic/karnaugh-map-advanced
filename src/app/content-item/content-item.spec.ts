import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentItem } from './content-item';

describe('ContentItem', () => {
  let component: ContentItem;
  let fixture: ComponentFixture<ContentItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
