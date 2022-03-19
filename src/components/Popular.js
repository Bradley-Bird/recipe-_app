import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Popular() {
  useEffect(() => {
    getPopular();
  }, []);
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <Wrapper key={recipe.id}>
            <h3>Popular Picks</h3>
            {popular.map((recipe) => {
              return (
                <Card key={recipe.id}>
                  <p>{recipe.title}</p>
                </Card>
              );
            })}
          </Wrapper>
        );
      })}
    </div>
  );
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
`;
export default Popular;
