import React from 'react';
import Card from './Card';
import Button from './Button';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Slider = ({ people, index, onAdd, onSub }) => {
  console.log(index);
  const Person = people.map((person, i) => {
    let position = 'nextSlide';
    if (i === index) {
      position = 'activeSlide';
    }
    if (i === index - 1 || (index === 0 && i === people.length - 1)) {
      position = 'lastSlide';
    }
    return <Card key={person.id} {...person} css={position} />;
  });
  return (
    <div className="section-center">
      {Person}
      <Button css="prev" onClick={onSub}>
        <FiChevronLeft />
      </Button>
      <Button css="next" onClick={onAdd}>
        <FiChevronRight />
      </Button>
    </div>
  );
};

export default Slider;
