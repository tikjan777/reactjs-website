import React, {useState, memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {useCustomDebounce} from '../../../hooks';
import {fetchUsersByQuery, setPageNumber} from '../../../redux/users/actions';

import {
  TextField,
  InputAdornment,
  Grid,
  Avatar
} from '@material-ui/core';
import {Alert, AlertTitle, Pagination} from '@material-ui/lab';
import {AccountCircle} from '@material-ui/icons';
import './Users.css';

const Users = () => {

  const dispatch = useDispatch();
  const userData = useSelector(state => state.Users.users);
  const totalCount = useSelector(state => state.Users.totalCount);
  const pageNumber = useSelector(state => state.Users.pageNumber);

  const [value, setValue] = useState('');
  const debouncedValue = useCustomDebounce(value, 500);
  // const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);


  useEffect(() => {
    dispatch(setPageNumber(1));
    getUsers(1);
  }, [debouncedValue]);

  useEffect(() => {
    getUsers();
  }, [pageNumber]);

  useEffect(() => {
    let pages = Math.ceil(totalCount / 10);
    pages = pages > 100 ? 100 : pages;
    setPageCount(pages);
  }, [userData, totalCount]);

  const getUsers = (passedPageNumber) => {

    debouncedValue.trim().length > 2 &&
    dispatch(fetchUsersByQuery(
      {
        q: `${debouncedValue.trim()} type:user`,
        per_page: 10,
        page: passedPageNumber ? passedPageNumber : pageNumber,
      }
    ));
  };

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };

  const mapUsers = () => {
    return userData?.map((item) => {
      return (
        <Grid className="Users__row" justify="center"
              alignItems="center" container direction="row"
              key={item.id}>
          <Grid item xs={12} md={3}>
            <Avatar style={{}} alt="user avatar"
                    src={item.avatar_url}/>
          </Grid>
          <Grid item xs={12} md={3}>{item.login}</Grid>
          <Grid item xs={12} md={3}>{item.type}</Grid>
          <Grid item xs={12} md={3}>{item.id}</Grid>
        </Grid>
      );
    });
  };

  return (
    <>

        <h5>
          The Search API helps you search for the specific item you want to find. For example, you can find a user or a specific file in a repository. Think of it the way you think of performing a search on Google. It's designed to help you find the one result you're looking for (or maybe the few results you're looking for). Just like searching on Google, you sometimes want to see a few pages of search results so that you can find the item that best meets your needs. To satisfy that need, the GitHub Search API provides up to 1,000 results for each search.
        </h5>
      <TextField
        label="Search Users"
        size='medium'
        name='userSearch'
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle/>
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        value={value}
      />
      {
        userData?.length ?
          mapUsers()
          :
          debouncedValue.trim().length > 2 &&
          <Alert style={{
            width: '300px',
            margin: 'auto',
            marginTop: '100px'
          }} severity="info">
            <AlertTitle>No Users Found</AlertTitle>
            There were no users found
            with <strong>{debouncedValue}</strong> username
          </Alert>
      }
      <Pagination style={{
        margin: 'auto',
        marginTop: '50px',
        width: 'fit-content'
      }}
                  page={pageNumber}
                  count={pageCount}
                  variant="outlined"
                  shape="rounded"
                  onChange={(ev, page) => {
                    dispatch(setPageNumber(page))
                  }}/>
    </>
  );
};
export default memo(Users);