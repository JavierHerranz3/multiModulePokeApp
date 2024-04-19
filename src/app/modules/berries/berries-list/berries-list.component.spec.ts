import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesListComponent } from './berries-list.component';

describe('BerriesListComponent', () => {
  let component: BerriesListComponent;
  let fixture: ComponentFixture<BerriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerriesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BerriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
