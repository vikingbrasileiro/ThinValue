import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTilesComponent } from './board-tiles.component';

describe('BoardTilesComponent', () => {
  let component: BoardTilesComponent;
  let fixture: ComponentFixture<BoardTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
