import { Grid, Card, CardContent } from '@mui/material';
import Chart from "chart.js"
import "./Common.css";
import { useEffect } from 'react';

function Dashboard1() {


  useEffect(() => {
    const barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Bar Chart',
        data: [50, 60, 70, 80, 90, 100],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    const lineChartData = {
      labels: ['Jully', 'August', 'Sept', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Line Chart',
        data: [30, 40, 50, 60, 70, 80],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        lineTension: 0
      }]
    };

    const barChartCanvas = document.getElementById('bar-chart-canvas').getContext('2d');
    const lineChartCanvas = document.getElementById('line-chart-canvas').getContext('2d');

    const barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: barChartData
    });

    const lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: lineChartData
    });
  }, []);

  return (
    <div style={{ marginLeft: "195px", marginTop: "50px" }} >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} className='Card1'>
          <Card style={{ width: '300px', height: '250px', margin: '0 10px' }}  >
            <CardContent>
              <h1>150</h1>
              <p>New Orders</p>
              <img src="https://tse1.mm.bing.net/th?id=OIP.lXULWv3zhaUIlIvlrxaFOQHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109" height="100px" width="100px" style={{
                position: "relative",
                display: "flex", marginLeft: "155px", marginTop: "-75px"
              }} />
              <p className='More' >More Info</p>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} className='Card2'>
          <Card style={{ width: '300px', height: '250px', margin: '0 10px' }} >
            <CardContent>
              <h1>153</h1>
              <p>Bounce Rate</p>


              <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" className='bar' >
                <rect x="20" y="150" width="50" height="50" fill="#3498db" />

                <rect x="80" y="120" width="50" height="80" fill="#e74c3c" />

                <rect x="140" y="100" width="50" height="100" fill="#2ecc71" />

                <line x1="50" y1="150" x2="290" y2="150" stroke="black" stroke-width="2" />

                <line x1="10" y1="150" x2="10" y2="20" stroke="black" stroke-width="2" />

                <text x="30" y="180" fill="black">Bar 1</text>
                <text x="90" y="180" fill="black">Bar 2</text>
                <text x="150" y="180" fill="black">Bar 3</text>
              </svg>


              <p className='More1' >More Info</p>

            </CardContent>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid item xs={12} sm={6} md={4} lg={3} className='Card3'>
          <Card style={{ width: '300px', height: '250px', margin: '0 10px' }} >
            <CardContent>
              <h1>44</h1>
              <p>user Registration</p>
              <div className='apple' >

                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                  <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"  ></path>
                </svg>
              </div>

              <p className='More2' >More Info</p>


            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} className='Card4'>
          <Card style={{ width: '300px', height: '250px', margin: '0 10px' }} >
            <CardContent>
              <h1>65</h1>
              <p>Unique Visitor's</p>
              <div className='native' >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
                  <linearGradient id="9GkdZLxQa1XTDblOFwLcpa_t4YbEbA834uH_gr1" x1="32" x2="32" y1="25.213" y2="36.722" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><circle cx="32" cy="32" r="6" fill="url(#9GkdZLxQa1XTDblOFwLcpa_t4YbEbA834uH_gr1)"></circle><linearGradient id="9GkdZLxQa1XTDblOFwLcpb_t4YbEbA834uH_gr2" x1="32" x2="32" y1="7.426" y2="53.44" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#9GkdZLxQa1XTDblOFwLcpb_t4YbEbA834uH_gr2)" d="M58,32c0-3.758-4.243-7.017-10.853-8.992c0.221-1.031,0.407-2.045,0.524-3.015	c0.657-5.483-0.483-9.323-3.211-10.813c-2.729-1.489-6.574-0.372-10.831,3.146c-0.544,0.449-1.087,0.938-1.629,1.45	c-0.542-0.513-1.085-1.001-1.629-1.45C26.114,8.808,22.267,7.692,19.54,9.18c-2.728,1.489-3.868,5.329-3.211,10.813	c0.116,0.971,0.303,1.984,0.524,3.015C10.243,24.983,6,28.242,6,32s4.243,7.017,10.853,8.992c-0.221,1.031-0.407,2.045-0.524,3.015	c-0.657,5.483,0.483,9.323,3.211,10.813c0.789,0.431,1.67,0.643,2.628,0.643c2.357,0,5.177-1.287,8.203-3.788	c0.544-0.449,1.087-0.938,1.629-1.45c0.542,0.513,1.085,1.001,1.629,1.45c3.026,2.501,5.846,3.788,8.203,3.788	c0.958,0,1.84-0.213,2.628-0.643c2.728-1.489,3.868-5.329,3.211-10.813c-0.116-0.971-0.303-1.984-0.524-3.015	C53.757,39.017,58,35.758,58,32z M34.902,13.866c3.53-2.917,6.665-3.987,8.599-2.931c1.934,1.055,2.729,4.27,2.184,8.818	c-0.105,0.879-0.273,1.796-0.469,2.729c-2.117-0.519-4.43-0.915-6.892-1.166c-1.564-2.275-3.215-4.351-4.908-6.132	C33.91,14.718,34.406,14.276,34.902,13.866z M39.899,36.313c-0.853,1.562-1.76,3.055-2.702,4.474C35.546,40.925,33.811,41,32,41	s-3.546-0.075-5.198-0.213c-0.941-1.42-1.849-2.912-2.702-4.474c-0.784-1.435-1.499-2.878-2.142-4.313	c0.643-1.434,1.358-2.877,2.142-4.313c0.853-1.562,1.76-3.055,2.702-4.474C28.454,23.075,30.189,23,32,23s3.546,0.075,5.198,0.213	c0.941,1.42,1.849,2.912,2.702,4.474c0.784,1.435,1.499,2.878,2.142,4.313C41.399,33.434,40.683,34.877,39.899,36.313z M43.078,34.487c0.68,1.739,1.238,3.444,1.676,5.096c-1.544,0.376-3.21,0.694-5.009,0.929c0.657-1.05,1.3-2.124,1.909-3.241	C42.161,36.346,42.629,35.416,43.078,34.487z M32,47.403c-1.272-1.341-2.522-2.863-3.729-4.513C29.487,42.961,30.73,43,32,43	s2.513-0.039,3.729-0.11C34.522,44.54,33.272,46.062,32,47.403z M24.254,40.512c-1.799-0.235-3.465-0.553-5.009-0.929	c0.438-1.652,0.996-3.358,1.676-5.096c0.45,0.93,0.918,1.859,1.423,2.785C22.954,38.388,23.597,39.462,24.254,40.512z M20.922,29.513c-0.68-1.739-1.238-3.445-1.676-5.096c1.544-0.376,3.21-0.694,5.009-0.929c-0.657,1.05-1.3,2.124-1.909,3.241	C21.839,27.654,21.371,28.584,20.922,29.513z M32,16.597c1.272,1.341,2.522,2.863,3.729,4.513C34.513,21.039,33.27,21,32,21	s-2.513,0.039-3.729,0.11C29.478,19.46,30.728,17.938,32,16.597z M41.655,26.729c-0.609-1.116-1.252-2.19-1.909-3.241	c1.799,0.235,3.465,0.553,5.009,0.929c-0.438,1.652-0.996,3.358-1.676,5.096C42.629,28.584,42.161,27.654,41.655,26.729z M18.315,19.754c-0.546-4.549,0.25-7.764,2.184-8.818c0.488-0.267,1.053-0.397,1.681-0.397c1.86,0,4.278,1.147,6.918,3.328	c0.496,0.41,0.993,0.852,1.488,1.319c-1.693,1.781-3.345,3.856-4.908,6.132c-2.463,0.251-4.776,0.648-6.892,1.166	C18.588,21.55,18.421,20.633,18.315,19.754z M8,32c0-2.6,3.47-5.303,9.317-7.06c0.606,2.279,1.437,4.654,2.471,7.06	c-1.034,2.407-1.865,4.782-2.471,7.06C11.47,37.303,8,34.6,8,32z M29.098,50.134c-3.53,2.917-6.662,3.989-8.599,2.931	c-1.934-1.055-2.729-4.27-2.184-8.818c0.105-0.879,0.273-1.796,0.469-2.729c2.117,0.519,4.43,0.915,6.892,1.166	c1.564,2.275,3.215,4.351,4.908,6.132C30.09,49.282,29.594,49.724,29.098,50.134z M45.685,44.246	c0.546,4.549-0.25,7.764-2.184,8.818c-1.934,1.059-5.068-0.014-8.599-2.931c-0.496-0.41-0.993-0.852-1.488-1.319	c1.693-1.781,3.345-3.856,4.908-6.132c2.463-0.251,4.776-0.648,6.892-1.166C45.412,42.45,45.579,43.367,45.685,44.246z M46.683,39.06c-0.606-2.279-1.437-4.654-2.471-7.06c1.034-2.407,1.865-4.782,2.471-7.06C52.53,26.697,56,29.4,56,32	S52.53,37.303,46.683,39.06z"></path>
                </svg>
              </div>
              <p className='More2' >More Info</p>

            </CardContent>
          </Card>
        </Grid>
        <div className='charts' >

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className="chart tab-pane active" id="bar-chart" style={{ position: 'relative', height: '300px' }}>
                <canvas id="bar-chart-canvas" height="200" width="400" className="chartjs-render-monitor"></canvas>
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="chart tab-pane" id="line-chart" style={{ position: 'relative', height: '300px' }}>
                <canvas id="line-chart-canvas" height="200" width="400" className="chartjs-render-monitor"></canvas>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Dashboard1;
