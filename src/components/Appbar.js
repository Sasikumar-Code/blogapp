/** @format */

import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import Badge from '@mui/material/Badge';
import Newpost from './Newpost';

const Appbar = () => {
  const Items = useSelector((state) => state.favor);
  const [notify, setNotify] = useState(0);
  useEffect(() => {
    setNotify(Items?.length);
  });
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" color="inherit" component="div">
            SK Blog App
          </Typography>
        </Toolbar>
      </AppBar>
      <Newpost />
      <Link to={'/favorite'}>
        <IconButton
          sx={{ float: 'right', marginTop: '-43px', marginRight: '20px' }}
        >
          <Badge color="secondary" badgeContent={notify} showZero>
            <FavoriteBorderTwoToneIcon />
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
};

export default Appbar;
