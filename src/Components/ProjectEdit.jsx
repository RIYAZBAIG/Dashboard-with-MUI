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

const ProjectEdit = () => {
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
    { id: 1, name: 'Functional-requirements.docx', email: '85.8525kb'},
    { id: 2, name: 'logo.png', email: '75.7225kb'},
    { id: 3, name: 'mark.jpeg', email: '65.4578kb'},
    { id: 4, name: 'UAT.pdf', email: '55.7245kb'},
    { id: 5, name: 'contact_25hd', email: '66.2585kb'},
  ];

  return (
    <Container maxWidth="lg">
      <Box marginTop={2}>
        <Typography variant="h5" gutterBottom>
          Files
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>File Name</TableCell>
                <TableCell>File Size</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
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

export default ProjectEdit;

const handleView = (row) => {
  console.log(`Viewing details for user ${row.id}`);
};

const handleEdit = (row) => {
  console.log(`Editing details for user ${row.id}`);
};

const handleDelete = (row) => {
  console.log(`Deleting user ${row.id}`);
};

