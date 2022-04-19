import * as React from 'react';
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteUserLogin, fetchUsersLogin, updateUserLogin } from '../../redux/action/login.action';

export default function LoginUser() {
  const dispatch = useDispatch();
    const login = useSelector(state => state.login);

    console.log(login.login)

    React.useEffect(
        () => {
            dispatch(fetchUsersLogin())
        },
    [])

    const handleDelete = (id) => {
        dispatch(deleteUserLogin(id))
    }

    const handleEdit = () => {
        dispatch(updateUserLogin())
    }

  return (
    <div>
      <Box>
        <Typography variant="h5">
          Users Login
        </Typography>
      </Box>

      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">E-mail</TableCell>
                  <TableCell align="left">Password</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  login.login !== undefined &&
                  login.login.map((m, i) => (
                    <TableRow
                      key={i}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{m.email}</TableCell>
                      <TableCell align="left">{m.password}</TableCell>
                      <TableCell>
                        <IconButton aria-label="delete" onClick={() => handleDelete(m.id)}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="edit" onClick={() => handleEdit(m.row)}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
}
