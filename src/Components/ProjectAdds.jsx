import React from 'react';
import { MDBTextArea } from 'mdb-react-ui-kit';
import { Box, Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ProjectAdds = () => {
  const [selectedStatus, setSelectedStatus] = React.useState('');

  const handleChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div style={{marginLeft:"225px", marginTop:"50px"}} >

    <Card>
      <CardHeader title="Add Project" />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <InputLabel id="demo-simple-select-label">Project Discription</InputLabel>

          <MDBTextArea label='Message' id='textAreaExample' rows={4} /> <br />
          
          
            

            <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <FormControl sx={{ m: 1, width: '100%' }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedStatus}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value="">Select One</MenuItem>
              <MenuItem value="Planning">Planning</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <input type="text" placeholder="Project Name" />
            <input type="text" placeholder="Project Leader" />
          </Box>
        </Box>
      </CardContent>
    </Card>
    </div>

  );
};



export default ProjectAdds;