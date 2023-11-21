import React from 'react';
import {
  Box,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Projects = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rows = [
    { id: 1, name: 'Harshad patel', email: 'harshad125.ptl@example.com', age: 30 },
    { id: 2, name: 'Riyaj Baig', email: 'Riyaj.baig@example.com', age: 25 },
    { id: 3, name: 'manish Parker', email: 'manish.parker@example.com', age: 20 },
    { id: 4, name: 'kalpesh', email: 'marker.kalpsesh@example.com', age: 19 },
    { id: 5, name: 'vynkatesh', email: 'nay.vyne@example.com', age: 45 },
  ];

  return (
    <Container maxWidth="lg">
      <Box marginTop={2}>
        <Typography variant="h5" gutterBottom>
          User Table
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>
                    <IconButton color="primary" size="small" onClick={() => handleView(row)}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton color="default" size="small" onClick={() => handleEdit(row)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" size="small" onClick={() => handleDelete(row)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Container>
  );
};

export default Projects;

const handleView = (row) => {
  console.log(`Viewing details for user ${row.id}`);
};

const handleEdit = (row) => {
  console.log(`Editing details for user ${row.id}`);
};

const handleDelete = (row) => {
  console.log(`Deleting user ${row.id}`);
};
