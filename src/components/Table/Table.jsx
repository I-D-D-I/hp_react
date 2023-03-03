import React from 'react'
import s from './Table.module.css'

export const Table = ({children}) => {
    return <div className={s.services__wrapper}>{children}</div>;
};

 