import React from 'react';
import { Formik } from 'formik';
import { FormStyled, LabelStyled, InputStyled } from '../styles.jsx';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice.js';

export const Filter = props => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Formik>
      <FormStyled autoComplete="off">
        <LabelStyled htmlFor="filter">
          Filter
          <InputStyled
            type="input"
            name="filter"
            onChange={onChange}
            value={props.value}
          />
        </LabelStyled>
      </FormStyled>
    </Formik>
  );
};
