import { ComponentClass } from 'react';
import { StoreName, Stores } from './Stores';
import { inject, IReactComponent, observer } from 'mobx-react';
import { Omit } from '../core/literals';

export function withStore<TOriginalProps extends Stores>(
  component: IReactComponent<TOriginalProps>,
  ...storeNames: StoreName[]
) {
  return inject(...storeNames)(
    observer(component),
  ) as unknown as ComponentClass<Omit<TOriginalProps, StoreName>>;
}
