export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      return { pets: [...state.pets, action.pet] };

    case "REMOVE_PET":
      let updatedPets = [...state.pets].filter(pet => pet.id !== action.id);
      return { pets: updatedPets };

    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  let text = state.pets.map(pet => {
    return `<li>${pet.name}</li>`;
  });

  document.getElementById("container").innerHTML = `<ul>${text.join("")}</ul>`;
}
