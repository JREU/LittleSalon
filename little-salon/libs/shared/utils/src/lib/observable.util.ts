import { filter, Observable } from 'rxjs';

function isDefined<T>(value: T): value is NonNullable<T> {
    return value !== undefined;
}

/**
 * Omit all undefined values from an observable.
 * Note: This makes sure you do not have to define types as <Type> | null
 */
export function filterDefined<T>(source$: Observable<T>): Observable<NonNullable<T>>{
    return source$.pipe(filter(isDefined));
}