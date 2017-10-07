export const state = () => {
   return {
        index: 1 }
}

export const mutations = {
    set(state, index) {
      state.index = index;
    }
}
