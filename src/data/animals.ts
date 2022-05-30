export type Animal = {
    name: string;
    imgSrc: string;
    species: string;
}

const animals: Animal[] = [
  {
    name: 'Reksis',
    imgSrc: 'https://blog.healthypawspetinsurance.com/wp-content/uploads/2021/09/brown-and-white-corgi-dog-outside.jpg',
    species: 'dog',
  },
  {
    name: 'Fēlikss',
    imgSrc: 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg',
    species: 'cat',
  },
  {
    name: 'Kāmis',
    imgSrc: 'https://i.pinimg.com/474x/45/3b/07/453b077b7b63876ab266783100363804.jpg',
    species: 'hamster',
  },
];

export default animals;
