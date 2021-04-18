import { GetterTree, MutationTree } from 'vuex'
import { RootState } from '~/store/index'

export enum ViewSizes {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

export interface StoreState {
  viewSize: ViewSizes,
}

export const state = () => ({
  viewSize: ViewSizes.SM,
})

export const getters: GetterTree<StoreState, RootState> = {
  viewSize: state => state.viewSize,
}

export const mutations: MutationTree<StoreState> = {
  setViewSize: (state, viewSize: ViewSizes) => {
    state.viewSize = viewSize
  },
}
