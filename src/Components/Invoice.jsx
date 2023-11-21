import React from 'react';
import { Container, Box, Grid,Button, Paper, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import html2pdf from 'html2pdf.js';
const Invoice = () => {



  const generatePdf = () => {
    const element = document.getElementById('invoice-container');
    const opt = {
      margin: 10,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
  
    html2pdf(element, opt);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ paddingTop: 5, paddingBottom: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h4">Invoice</Typography>
                <Typography variant="subtitle1">Invoice Number: #007612</Typography>
                <Typography variant="subtitle1">Date: 2023-11-16</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={3}>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h5">From</Typography>
                <Typography variant="body1">Admin, Inc.</Typography>
                <Typography variant="body1">795 Folsom Ave, Suite 500</Typography>
                <Typography variant="body1">San Francisco, CA 94107</Typography>
                <Typography variant="body1">(804) 123-5432</Typography>
                <Typography variant="body1">info@almasaeedstudio.com</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={3}>
              <Box sx={{ padding: 2 }}>
              <Typography variant="h5">Shipping Address</Typography>
                <Typography variant="body1">Riyaj Baig</Typography>
                <Typography variant="body1">795 Baig villa, Suite 600</Typography>
                <Typography variant="body1">Aurangabad, MH 431001</Typography>
                <Typography variant="body1">(555) 539-1037</Typography>
                <Typography variant="body1">riyajbaig455@.com</Typography>
            
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h5">Shipping Address</Typography>
                <Typography variant="body1">Riyaj Baig</Typography>
                <Typography variant="body1">795 Baig villa, Suite 600</Typography>
                <Typography variant="body1">Aurangabad, MH 431001</Typography>
                <Typography variant="body1">(555) 539-1037</Typography>
                <Typography variant="body1">riyajbaig455@.com</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box sx={{ padding: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Qty</TableCell>
                      <TableCell>Product</TableCell>
                      <TableCell>Serial #</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Subtotal</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Call of Duty</TableCell>
                      <TableCell>455-981-221</TableCell>
                      <TableCell>El snort testosterone trophy driving gloves handsome</TableCell>
                      <TableCell>$64.50</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Need for Speed IV</TableCell>
                      <TableCell>247 925-726</TableCell>
                      <TableCell>Wes Anderson umami biodiesel</TableCell>
                      <TableCell>$50.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Monsters DVD</TableCell>
                      <TableCell>735-845-642</TableCell>
                      <TableCell>Terry Richardson helvetica tousled street art master</TableCell>
                      <TableCell>$10.70</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Grown Ups Blue Ray</TableCell>
                      <TableCell>422-568-642</TableCell>
                      <TableCell>Tousled lomo letterpress</TableCell>
                      <TableCell>$25.99</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h6">Total Amount: $151.19</Typography>
                <Button variant="contained" disableElevation onClick={generatePdf } >
  Generate PDF
</Button>
<Button variant="contained" color="success" style={{marginLeft:"810px"}} >
  Submit Payment
</Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Invoice;
