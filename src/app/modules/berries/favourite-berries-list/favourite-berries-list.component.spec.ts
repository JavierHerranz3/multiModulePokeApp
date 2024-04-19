import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteBerriesListComponent } from './favourite-berries-list.component';

describe('FavouriteBerriesListComponent', () => {
  let component: FavouriteBerriesListComponent;
  let fixture: ComponentFixture<FavouriteBerriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteBerriesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouriteBerriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
