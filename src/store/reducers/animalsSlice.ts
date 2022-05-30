import { createSlice } from '@reduxjs/toolkit';
import { Animal } from '../../data/animals';

export const animalsSlice = createSlice({
  name: 'animals',
  initialState: {
    animals: JSON.parse(localStorage.getItem('animals') || '[]') as Animal[],
    // animals: [] as Animal[],
    species: JSON.parse(localStorage.getItem('species') || '[]') as string[],
    // species: [] as string[],
    hidden: true,
  },

  reducers: {
    addAnimals: (state, action) => {
      state.animals = [...state.animals, action.payload];
      localStorage.setItem('animals', JSON.stringify(state.animals));
    },
    clearAnimals: (state) => {
      state.animals = [];
      localStorage.setItem('animals', JSON.stringify(state.animals));
    },
    addSpecies: (state, action) => {
      const checkSpecies = state.species.find((e) => e === action.payload);
      if (!checkSpecies) {
        state.species = [...state.species, action.payload];
      }
      state.species = [...state.species];
      localStorage.setItem('species', JSON.stringify(state.species));
    },
    filterSpecies: (state, action) => {
      const allAnimals = JSON.parse(localStorage.getItem('animals') || '[]') as Animal[];
      if (action.payload === 'all') {
        state.animals = allAnimals;
      } else {
        state.animals = allAnimals.filter((animal) => animal.species === action.payload);
      }
    },
    changeHidden: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const {
  addAnimals, addSpecies, filterSpecies, changeHidden, clearAnimals,
} = animalsSlice.actions;

export default animalsSlice.reducer;
