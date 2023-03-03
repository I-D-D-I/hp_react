import React from 'react'
import { Layout } from '../../Layout/Layout';
import { Table } from '../../components/Table/Table';
import { Cards } from '../../components/Cards/Cards';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export const Home = ({
  inpvalue,
  setInpvalue,
  select,
  setSelect,
  like,
  dislike,
  liked,
  newData,
}) => {
  return (
    <Layout
      inpvalue={inpvalue}
      setInpvalue={setInpvalue}
      select={select}
      setSelect={setSelect}
    >
      <Table>
        {newData.map((el, ind) => (
          <Cards
            key={ind}
            image={el.image}
            nameHero={el.name}
            actor={el.actor}
            gender={el.gender}
            house={el.house}
            wandCore={el.wand.core}
            alive={el.alive ? "yes" : "no"}
            like={like}
            dislike={dislike}
            liked={liked}
            isLiked={liked.includes(el.name)} // если в массиве имен liked есть name, то true
          />
        ))}
      </Table>
      <Link to="/Favorites">
        <Button />
      </Link>
    </Layout>
  );
};
