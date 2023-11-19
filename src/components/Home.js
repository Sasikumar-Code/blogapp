/** @format */

import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Home(props) {
  const [postList, setPostList] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [controller, setController] = useState({
    page: 0,
    rowsPerPage: 10,
  });
  // Calculate pagination values
  const handlePageChange = (event, newPage) => {
    console.log(newPage);
    setController({
      ...controller,
      page: newPage,
    });
  };

  const handleChangeRowsPerPage = (event) => {
    setController({
      ...controller,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${
          controller.page + 1
        }&_limit=${controller.rowsPerPage}`
      )
      .then((res) => {
        setPostList(res.data);
        setPostCount(res.data.length);
      });
  }, [controller]);

  return (
    <div>
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><h1>ID</h1></TableCell>
              <TableCell><h1>Title</h1></TableCell>
              <TableCell><h1>View</h1></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {postList.map((data) => {
              return (
                <TableRow>
                  <TableCell>{data.id}</TableCell>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>
                    <Link to={`/post/${data.id}`}>View Post</Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          onPageChange={handlePageChange}
          page={controller.page}
          count={100}
          rowsPerPage={controller.rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </div>
  );
}

export default Home;
