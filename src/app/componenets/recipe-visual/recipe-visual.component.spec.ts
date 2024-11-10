import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeVisualComponent } from './recipe-visual.component';

describe('RecipeVisualComponent', () => {
  let component: RecipeVisualComponent;
  let fixture: ComponentFixture<RecipeVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeVisualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
