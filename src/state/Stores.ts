import { AppStore } from './AppStore';

export interface WithAppStore {
  appStore: AppStore;
}

export interface Stores
  extends Partial<WithAppStore> {
}

export type StoreName = keyof Stores;
