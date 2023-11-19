/** @format */

import {
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from '@mui/material';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addFovor } from '../actions/addFovor';

function Post() {
  const dispatch = useDispatch();
  const favor = useSelector((state) => state.favor);
  const [data, setData] = useState();
  const { postId } = useParams();

  const addFavorite = async () => {
    try {
      dispatch(addFovor(data));
      console.log('Favor State', favor);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    try {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
    } catch (error) {}

    console.log('Post component did mount', postId);
  }, []);
  return (
    <div>
      <center>
        <img src="https://source.unsplash.com/collection/928423/" />
      </center>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <h1>ID</h1>
              </TableCell>
              <TableCell>
                <h1>Title</h1>
              </TableCell>
              <TableCell>
                <h1>Body</h1>
              </TableCell>
              <TableCell>
                <h1>Favorite</h1>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{data?.id}</TableCell>
              <TableCell>{data?.title}</TableCell>
              <TableCell>{data?.body}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => addFavorite()}
                  sx={{
                    float: 'right',
                    marginTop: '-43px',
                    marginRight: '20px',
                  }}
                >
                  <FavoriteBorderTwoToneIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

export default Post;
