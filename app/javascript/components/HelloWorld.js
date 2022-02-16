import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingsReducer';


const HelloWorld = () => {
  const greeting = useSelector((state) => state.greetingsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <h1>
      Greeting: {greeting[3]}
    </h1>
  );
}

export default HelloWorld;
