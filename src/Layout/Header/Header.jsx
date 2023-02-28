import React from 'react'
import s from './Header.module.css'

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header__box}>
        <h1 className={s.header__title}>Harry Potter</h1>
        <p className={s.header__subtitle}>
          View all characters from the Harry Potter universe
        </p>
        <div className={s.header__inputs}>
          <div className={s.select__wrapper}>
            <label className={s.header__label} for="header__input">
              Name
            </label>
            <input
              className={s.header__input}
              type="text"
              placeholder="Hermione"
            />
          </div>
          <div className={s.select__wrapper}>
            <label className={s.header__label} for="header__select">
              School
            </label>
            <select className={s.header__select} name="schools">
              <option selected disabled className={s.select__first} value="">
                Choose one
              </option>
              <option className={s.select__school} value="Slytherin">
                Slytherin
              </option>
              <option className={s.select__school} value="Gryffindor">
                Gryffindor
              </option>
              <option className={s.select__school} value="Ravenclaw">
                Ravenclaw
              </option>
              <option className={s.select__school} value="Hufflepuff">
                Hufflepuff
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
