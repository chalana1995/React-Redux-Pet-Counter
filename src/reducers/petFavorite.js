const petFavorite = (state = 5, action) => {
    switch (action.type) {
      case "PET_FOVORITE_INCREASED":
        return state + 1
      case "PET_FAVORIT_DECREASED":
        return state - 1
      default:
        return state
    }
  }
  
  export default petFavorite;