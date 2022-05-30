import React, { useState } from 'react';
import './form.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Buttons/Button';
import CloseBtn from '../Buttons/CloseBtn';
import { AppDispatch, RootState } from '../../store/store';
import { addSpecies, addAnimals, changeHidden } from '../../store/reducers/animalsSlice';

const Form = () => {
  const speciesItems = useSelector((state: RootState) => state.speciesItems.species);
  const animalsItems = useSelector((state: RootState) => state.animalsItems.animals);
  const hiddenMode = useSelector((state: RootState) => state.hiddenMode.hidden);
  const [inputValueName, setInputValueName] = useState('');
  const [inputValueImage, setInputValueImage] = useState('');
  const [inputValueSpecies, setInputValueSpecies] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [hiddenAddNewSpecies, setHiddenAddNewSpecies] = useState(true);
  const [hidden] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="covering-panel">
      <div className="form__container">
        <CloseBtn
          onClick={() => dispatch(changeHidden())}
        />
        <form className="form">
          <h2 className="title">Add Animal</h2>
          <label
            className="label"
            htmlFor="animalName"
          >
            Name
            <input
              className="input"
              type="text"
              id="animalName"
              name="animalName"
              placeholder="Animal name"
              value={inputValueName}
              onChange={(event) => setInputValueName(event.target.value)}
            />
          </label>
          <label
            className="label"
            htmlFor="animalImage"
          >
            Image source
            <input
              className="input"
              type="text"
              id="animalImage"
              name="animalImage"
              placeholder="Animal image"
              value={inputValueImage}
              onChange={(event) => setInputValueImage(event.target.value)}
            />
          </label>
          <label
            className="label"
            htmlFor="species"
          >
            <span>
              Species (
              <button
                className="addSpecies__button"
                type="button"
                onClick={() => {
                  setHiddenAddNewSpecies(!hiddenAddNewSpecies);
                }}
              >
                add new species
              </button>
              )
            </span>
            {!hiddenAddNewSpecies
              ? (
                <div>
                  <input
                    className="input"
                    type="text"
                    name="species"
                    placeholder="Animal species"
                    value={inputValueSpecies}
                    onChange={(event) => setInputValueSpecies(event.target.value)}
                  />
                </div>
              )
              : (
                <select
                  className="select"
                  name="species"
                  id="species"
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>Animal species</option>
                  {speciesItems.length === 0 && <option value="" disabled>-----Add new species-----</option>}
                  {speciesItems.map((e) => (
                    <option
                      key={e}
                      value={e}
                    >
                      {e}
                    </option>
                  ))}
                </select>
              )}
          </label>
          <Button
            name="Add"
            onClick={() => {
              if (!hiddenAddNewSpecies) { dispatch(addSpecies(inputValueSpecies)); }
              dispatch(addAnimals({
                name: inputValueName,
                imgSrc: inputValueImage,
                species: inputValueSpecies !== '' ? inputValueSpecies : selectedValue,
              }));
              setInputValueName('');
              setInputValueImage('');
              setInputValueSpecies('');
              setHiddenAddNewSpecies(!hiddenAddNewSpecies);
              dispatch(changeHidden());
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
