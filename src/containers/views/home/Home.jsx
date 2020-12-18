import React, {useState} from 'react';
import {IconButton} from '@material-ui/core';
import {AddCircle, RemoveCircle} from '@material-ui/icons';
import {useSelector, useDispatch} from 'react-redux';
import {incrementCounter, decrementCounter} from '../../../redux/home/actions';

const Home = () => {

  const counter = useSelector(state => state.Home.counter);
  const dispatch = useDispatch();

  return(
    <>
        <h2>
        Welcome to my new website
        </h2>

        <h5>
        <p>Hi everyone, </p>
        <p>I’m so excited to finally share my new website with you!</p>
        As an ever evolving illustrator, creator or crafter I realized that the new content (that I am willing to share with you) didn’t really fit into the old website layout. So the best solution to this: a new website design, a new logo, new categorization etc… So it’s well structured now :)
        </h5>

      <IconButton onClick={()=>dispatch(decrementCounter())} color="primary" aria-label="upload picture" component="span">
        <RemoveCircle />
      </IconButton>

      <h3>
        {counter}
      </h3>

      <IconButton onClick={()=>dispatch(incrementCounter())} color="primary" aria-label="upload picture" component="span">
        <AddCircle />
      </IconButton>
    </>
  )
}
export default Home;