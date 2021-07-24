export const petIncrement = () => {
  return {
    type: "PET_INCREASED",
  }
}

export const petDecrement = () => {
  return {
    type: "PET_DECREASED"
  }
}

export const petFavouriteIncrement = () => {
    return {
      type: "PET_FOVORITE_INCREASED",
    }
  }
  
  export const petFavouriteDecrement = () => {
    return {
      type: "PET_FAVORIT_DECREASED"
    }
  }
