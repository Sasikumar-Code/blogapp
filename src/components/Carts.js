/** @format */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

const Carts = () => {
  const Items = useSelector((state) => state.favor);
  useEffect(() => {
    console.log(Items);
  });
  return (
    <div>
      <h1>Favorite List</h1>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {Items.map((data) => {
              return (
                <TableRow>
                  <TableCell>{data.data.id}</TableCell>
                  <TableCell>{data.data.title}</TableCell>
                  <TableCell>{data.data.body}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Carts;
