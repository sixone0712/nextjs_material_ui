import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import tw, { css } from 'twin.macro';
import { User } from './type';

export default function Main({ data }: { data: User[] }) {
  const [users, setUsers] = useState<User[]>(data);

  useEffect(() => {
    // (async () => {
    //   const { data } = await axios.get<User[]>(
    //     'https://jsonplaceholder.typicode.com/users'
    //   );
    //   setUsers(data);
    // })();
  }, []);

  const refresh = async () => {
    const { data } = await axios.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
    setUsers(data);
  };

  return (
    <div css={tw`flex flex-col  items-center`}>
      <Button variant="contained" onClick={refresh}>
        ReLoad Data
      </Button>

      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Text only
      </Typography>
      <Box
        css={css`
          width: 300;
          height: 300;
        `}
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <List>
          {users.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  );

  return {
    props: {
      data,
    },
  };
};

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
