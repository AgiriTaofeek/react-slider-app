import { useState, useEffect } from 'react';
import Data from './data';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Slider from './components/Slider';
function App() {
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    //* Helps correct the bug if the index is less than or more the number of object in Data
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [index]);

  const addHandler = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };
  const subHandler = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <Wrapper>
      <Title />
      <Slider
        people={people}
        index={index}
        onAdd={addHandler}
        onSub={subHandler}
      />
    </Wrapper>
  );
}

export default App;
