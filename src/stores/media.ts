import { numInRange } from '../helpers/utils';
import { writable } from 'svelte/store';

export enum BreakPoints 
{
    MobileS = 'ms',
    MobileM = 'mm',
    MobileL = 'ml',
    Tablet = 't',
    Laptop = 'l',
    Desktop = 'd'
}

export const breakPoint = writable(BreakPoints.Desktop);

export function updateBreakPoint()
{
    let x = window.innerWidth;
    let _bp = null;

    switch (true)
    {
        case numInRange(x, 0, 320): 
            _bp = BreakPoints.MobileS
        break;
        case numInRange(x, 321, 375): 
            _bp = BreakPoints.MobileM
        break;
        case numInRange(x, 376, 767): 
            _bp = BreakPoints.MobileL
        break;
        case numInRange(x, 768, 1023): 
            _bp = BreakPoints.Tablet
        break;
        case numInRange(x, 1024, 1079): 
            _bp = BreakPoints.Laptop
        break;
        case x > 1080: 
            _bp = BreakPoints.Desktop
        break;
    }
    
    breakPoint.set(_bp);
}