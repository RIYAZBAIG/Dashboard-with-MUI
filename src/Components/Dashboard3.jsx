import { Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Chart from "chart.js"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function Dashboard3() {
    const [data,setData] = useState([]);
    const barChartRef = useRef(null);
    const lineChartRef = useRef(null);



    const getData = async()=>{

        const result = await axios.get("https://fakestoreapi.com/products/category/jewelery");
        console.log(result.data);
        setData(result.data)

    }

    useEffect(()=>{
        getData();
    },[]);
    


    useEffect(() => {
      const lineChartData = {
        labels: ['Jully', 'August', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Line Chart',
          data: [30, 40, 50, 60, 70, 80],
          fill: false,
          borderColor: 'rgba(88, 126, 245, 0.56)',
          backgroundColor: 'rgba(245, 130, 213, 0.56)',
          borderWidth: 1,
          lineTension: 0,
        }],
      };
  
      const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Bar Chart',
          data: [50, 60, 70, 80, 90, 100],
          backgroundColor: 'rgba(245, 129, 88, 0.56)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        }],
      };
  
      const barChartCanvas = barChartRef.current;
      const lineChartCanvas = lineChartRef.current;
  
      if (barChartCanvas && lineChartCanvas) {
        new Chart(barChartCanvas, {
          type: 'bar',
          data: barChartData,
        });
  
        new Chart(lineChartCanvas, {
          type: 'line',
          data: lineChartData,
        });
      }
    }, [data]);

    function createData(
      name: string,
      calories: number,
      fat: number,
      carbs: number,
      protein: number,
    ) {
      return { name, calories, fat, carbs, protein };
    }
    
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

  return (
    <div style={{ marginLeft: "175px", marginTop: "50px" }}>
      <Grid container spacing={2}>
        {/* First Card */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card style={{ width: '600px', height: '450px', margin: '0 10px' }}>
            <CardContent>
              <h1>Online Store visitor's</h1>
              <div className="chart tab-pane" id="line-chart" style={{ position: 'relative', height: '300px' }}>
                <canvas ref={lineChartRef} id="line-chart-canvas" height="200" width="400" className="chartjs-render-monitor"></canvas>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card style={{ width: '600px', height: '450px', margin: '0 10px' }}>
            <CardContent>
              <h1>Sales</h1>
              <div className="chart tab-pane active" id="bar-chart" style={{ position: 'relative', height: '300px' }}>
                <canvas ref={barChartRef} id="bar-chart-canvas" height="200" width="400" className="chartjs-render-monitor"></canvas>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Third Card */}
     
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card style={{ width: '600px', height: '450px', margin: '0 10px' }} >
            <CardContent>
              <p>Products</p>
            
                <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      {/* Add other header columns as needed */}
    </tr>
  </thead>
  <tbody>
    {Array.isArray(data) && data.length > 0 ? (
      data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.title}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="2">No data available</td>
        {/* Use colSpan to span across columns if you have multiple columns */}
      </tr>
    )}
  </tbody>
</table>


            </CardContent>
          </Card>
        </Grid>

        {/* Fourth Card */}
        <Grid item xs={12} sm={6} md={6} lg={6}>

          <Card style={{ width: '600px', height: '450px', margin: '0 10px' }} >
            <CardContent>
              <h1>Online Store Overview</h1>
              <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard3;
