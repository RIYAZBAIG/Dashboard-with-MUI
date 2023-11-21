import React, { useState } from 'react';
import { Grid, Card, Button, CardContent } from '@mui/material';

const AddTodoList = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    setList([...list, text]);
    setText('');
  };

  const handleDelete = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  const star = () => {
    debugger;
    var numberofColumn = 5;
    const stars = Array(numberofColumn).fill('*');
    setText(stars);
  };

  return (
    <>
      <div style={{marginLeft:"155px", marginTop:"50px"}} >
        <Grid>
          <Card>
            <CardContent>
        <h1>Hello Todolist</h1>

              <input
                type="text"
                placeholder="text here..."
                style={{ borderRadius: '50px', height: '40px' }}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button onClick={handleAdd}>ADD</Button>
              {list.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <h1>{item}</h1>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                </div>
                
              ))}
              
            </CardContent>
          </Card>
        </Grid>
        
      </div>
    </>
  );
};

export default AddTodoList;
