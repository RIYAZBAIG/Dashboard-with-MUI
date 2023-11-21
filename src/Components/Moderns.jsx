import React from 'react';
import { Grid, Card, CardContent, Modal, Alert } from '@mui/material';

const Moderns = () => {
  const [models, setModels] = React.useState([]);
  const [alerts, setAlerts] = React.useState([]);

  const fetchModelsAndAlerts = async () => {
    setModels([
      { id: 1, name: 'Model 1', description: 'Description of Model 1' },
      { id: 2, name: 'Model 2', description: 'Description of Model 2' },
    ]);

    setAlerts([
      { id: 1, severity: 'error', message: 'Error message 1' },
      { id: 2, severity: 'warning', message: 'Warning message 1' },
    ]);
  };

  React.useEffect(() => {
    fetchModelsAndAlerts();
  }, []);

  return (
    <div style={{ marginLeft: '175px', marginTop: '50px' }}>

    <Grid container spacing={3}>
      {models.map((model) => (
        <Grid item key={model.id}>
          <Card>
            <CardContent>
              <h2>{model.name}</h2>
              <p>{model.description}</p>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {alerts.map((alert) => (
        <Grid item key={alert.id}>
          <Card>
            <CardContent>
              <Alert severity={alert.severity}>{alert.message}</Alert>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
};

export default Moderns;
