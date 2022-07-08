import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';
import { Optional } from '@angular/core';

export const slider = trigger('routeAnimations', [
  transition('1 => *', slideTo('right')),
  transition('2 => 1', slideTo('left')),
  transition('2 => 3, 2 => 4, 2=>5', slideTo('right')),
  transition('3 => 2, 3=>1', slideTo('left')),
  transition('3 => 4, 3=>5', slideTo('right')),
  transition('4 => 5', slideTo('right')),
  transition('4 => 3, 4=>2, 4=>1', slideTo('left')),
  transition('5 => *', slideTo('left')),
]);

function slideTo(direction: string) {
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        opactiy: 0,
        width: '100%',
        padding: '0 5vw 0 0',
      }),
    ]),
    query(':enter', [style({ [direction]: '-100%', padding: '0 5vw 0 0' })]),
    group([
      query(':leave', [
        animate(
          '500ms ease-in-out',
          style({ [direction]: '100%', opacity: 0 })
        ),
      ]),
      query(':enter', [
        animate('500ms ease-in-out', style({ [direction]: '0%', opacity: 1 })),
      ]),
    ]),
  ];
}
