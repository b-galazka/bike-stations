import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

export abstract class BaseStateService<T> {
  // tslint:disable-next-line:variable-name
  private readonly _state: BehaviorSubject<T>;

  get state(): T {
    return this._state.value;
  }

  constructor(initialState: T) {
    this._state = new BehaviorSubject<T>(initialState);
  }

  select<K extends keyof T>(key: K): Observable<T[K]> {
    return this._state.pipe(pluck(key), distinctUntilChanged());
  }

  protected setState(state: Partial<T>): void {
    this._state.next({ ...this._state.value, ...state });
  }
}
