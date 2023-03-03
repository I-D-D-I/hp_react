import React from 'react'
import { Link } from 'react-router-dom';
import s from './Favorites.module.css'
import { Table } from '../../components/Table/Table';
import { Cards } from '../../components/Cards/Cards';

export const Favorites = ({ like, dislike, liked, likedData }) => {
  return (
    <>
      <div className={s.header}>
        <Link className={s.link} to="/">
          ← Back To All
        </Link>
        <div className={s.header__box}>
          <h2 className={s.header__title}>Liked ones</h2>
          <p className={s.header__subtitle}>
            View all characters from the Harry Potter universe
          </p>
        </div>
      </div>
      <Table>
        {likedData.map((el, ind) => (
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
    </>
  );
};
