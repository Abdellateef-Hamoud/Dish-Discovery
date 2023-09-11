import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipedetailsComponent } from './recipedetails.component';

describe('RecipedetailsComponent', () => {
  let component: RecipedetailsComponent;
  let fixture: ComponentFixture<RecipedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipedetailsComponent]
    });
    fixture = TestBed.createComponent(RecipedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
