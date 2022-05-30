import React from 'react';
import './homePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import Button from '../../components/Buttons/Button';
import '../../components/Form/form.scss';
import { AppDispatch, RootState } from '../../store/store';
import { changeHidden, filterSpecies } from '../../store/reducers/animalsSlice';

const HomePage = () => {
  const speciesItems = useSelector((state: RootState) => state.speciesItems.species);
  const animalsItems = useSelector((state: RootState) => state.animalsItems.animals);
  const hiddenMode = useSelector((state: RootState) => state.hiddenMode.hidden);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className="section">
      { !hiddenMode && <Form />}
      {animalsItems.length === 0
        ? (
          <div className="empty__container">
            <h1 className="empty__title">No animals added yet</h1>
          </div>
        )
        : (
          <div className="container">
            <div className="speciesButtons__row">
              <Button
                name="All"
                onClick={() => dispatch(filterSpecies('all'))}
              />
              {speciesItems.map((speciesElement) => (
                <Button
                  key={speciesElement}
                  name={speciesElement}
                  onClick={() => dispatch(filterSpecies(speciesElement))}
                />
              ))}
            </div>
            <div className="cards">
              {animalsItems.map(({ name, imgSrc, species }) => (
                <Card
                  key={name}
                  name={name}
                  imgSrc={imgSrc}
                  species={species}
                />
              ))}
            </div>
          </div>
        )}
      <div className="addButton__row">
        <Button
          name="Add animal"
          onClick={() => {
            dispatch(changeHidden());
          }}
        />
        {animalsItems.length !== 0
            && (
            <Button
              name="Clear All Animals"
              onClick={() => { localStorage.clear(); window.location.reload(); }}
            />
            )}
      </div>
    </section>
  );
};

export default HomePage;
