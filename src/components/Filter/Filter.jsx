import React from 'react';

import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={css.search}>
    <input
      className={css.search__input}
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search contacts..."
    />
  </div>
);

export default Filter;
