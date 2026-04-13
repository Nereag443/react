import { differenceInDays } from 'date-fns';

export function calculateDaysDifference(date1: Date, date2: Date): number {
    return differenceInDays(date1, date2);
}