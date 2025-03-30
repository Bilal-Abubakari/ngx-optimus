import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimusPipesComponent } from './optimus-pipes.component';

describe('OptimusPipesComponent', () => {
  let component: OptimusPipesComponent;
  let fixture: ComponentFixture<OptimusPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimusPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimusPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
