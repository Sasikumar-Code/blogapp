/** @format */

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { FormControl, Input, InputLabel } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Newpost() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({
    id: 0,
    tittle: '',
    body: '',
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = () => {
    if (data.id !== 0 && data.tittle !== '' && data.body !== '') {
      try {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: data.tittle,
            body: data.body,
            userId: data.id,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => alert(JSON.stringify(json)));
        handleClose();
        setData({
          id: 0,
          tittle: '',
          body: '',
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('please fill all inputs');
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          color: 'white',
          float: 'right',
          marginTop: '-43px',
          marginRight: '80px',
        }}
      >
        <AddCircleIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Post
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormControl>
              <InputLabel htmlFor="my-input">ID</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                onChange={(e) =>
                  setData({ ...data, ...{ id: e.target.value } })
                }
              />
            </FormControl>
            <br />
            <FormControl>
              <InputLabel htmlFor="my-input">Tittle</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                onChange={(e) =>
                  setData({ ...data, ...{ tittle: e.target.value } })
                }
              />
            </FormControl>
            <br />
            <FormControl>
              <InputLabel htmlFor="my-input">Body</InputLabel>
              <Input
                id="my-input"
                aria-describedby="my-helper-text"
                onChange={(e) => {
                  setData({ ...data, ...{ body: e.target.value } });
                }}
              />
            </FormControl>

            <br />
            <Button onClick={(e) => onSubmit()} type="submit">
              Submit
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
