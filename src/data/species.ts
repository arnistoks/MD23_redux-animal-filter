export type Species = {
    name: string;
}

export const species: Species[] = [{
  name: 'All',
},
];

export const getSpecies = () => [...species];

export default species;
