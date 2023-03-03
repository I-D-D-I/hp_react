import React from 'react'
import s from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={s.footer__wrapper}>
      <div>
        Pages
        <button>First</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>Last</button>
      </div>
      <div>
        <label className={s.footer__label} htmlFor="id3">
          Choose pages
        </label>
        <select
          id="id3"
          className={s.footer__select}
          name="schools"
          // onChange={(evt) => setSelect(evt.target.value)}
        >
          <option
            defaultValue
            disabled
            className={s.footer__select_first}
            value=""
          >
            Choose pages
          </option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
        </select>
      </div>
    </div>
  );
}
