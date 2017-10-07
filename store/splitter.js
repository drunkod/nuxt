export const state = () => {
         return { open: false }
}

export const mutations = {
      toggle(state, shouldOpen) {
        if (typeof shouldOpen === 'boolean') {
          state.open = shouldOpen;
        } else {
          state.open = !state.open;
        }
      }
}
