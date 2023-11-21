import React, { useState } from 'react';
import { Grid, Card, CardContent } from '@mui/material';

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    gridContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "10px",
        marginLeft: "180px",
        marginTop: "50px"

    },
    gridCard: {
        width: "90%",
        height: "200%",
        backgroundColor: "white",
        border: "1px solid black",
        padding: "10px",
        boxSizing: "border-box",
        marginLeft: "-12px"
    },
});

const Widgets = () => {
    const classes = useStyles();


    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') {
            return;
        }

        setMessages([...messages, { text: newMessage, sender: 'user' }]);
        setNewMessage('');
    };
    return (
        <React.Fragment>

            <div className={classes.gridContainer}  >
                <div className={classes.gridCard} style={{backgroundColor:"#ffe4b5 "}}>

                    <img src="https://tse2.mm.bing.net/th?id=OIP.g_jFE_ijXkNaWUHkjzpY7AHaHa&pid=Api&P=0&h=180" height="25px" />

                </div>
                <div className={classes.gridCard} style={{backgroundColor:"#800080 "}}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.7ACFjOZ-7gdrR_L1Le5BjgHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" height="25px" />

                </div>
                <div className={classes.gridCard} style={{backgroundColor:"#ffd700  "}}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.cSA3urhjSmO5TEzR0i3BQQHaHZ&pid=Api&rs=1&c=1&qlt=95&w=111&h=111" height="25px" />
                </div>
                <div className={classes.gridCard} style={{backgroundColor:"#6b8e23"}}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.8pk378F88daw1Ts0MOvDcQHaHa&pid=Api&rs=1&c=1&qlt=95&w=118&h=118" height="25px" />
                </div>
                <div className={classes.gridCard} style={{ marginTop: "50px", height: "90%", width: "90%", backgroundColor:"#cae00d " }} >
                    <img src="https://tse2.mm.bing.net/th?id=OIP.g_jFE_ijXkNaWUHkjzpY7AHaHa&pid=Api&P=0&h=180" height="25px" />

                </div>
                <div className={classes.gridCard} style={{ marginTop: "50px", height: "90%", width: "90%" , backgroundColor:"#ff00ff " }} >
                    <img src="https://tse1.mm.bing.net/th?id=OIP.7ACFjOZ-7gdrR_L1Le5BjgHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121" height="25px" />

                </div>
                <div className={classes.gridCard} style={{ marginTop: "50px", height: "90%", width: "90%", backgroundColor:"#cf3476" }} >
                    <img src="https://tse1.mm.bing.net/th?id=OIP.cSA3urhjSmO5TEzR0i3BQQHaHZ&pid=Api&rs=1&c=1&qlt=95&w=111&h=111" height="25px" />

                </div>
                <div className={classes.gridCard} style={{ marginTop: "50px", height: "90%", width: "90%" , backgroundColor:"#ff0000 " }} >
                    <img src="https://tse1.mm.bing.net/th?id=OIP.8pk378F88daw1Ts0MOvDcQHaHa&pid=Api&rs=1&c=1&qlt=95&w=118&h=118" height="25px" />

                </div>


            </div>

            <p style={{ position: "relative", display: "flex", marginLeft: "200px", marginTop: "80px" }} >Info Box With bg - *</p>
            <div style={{ marginTop: "30px", marginLeft: "160px" }} className='div2' >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}  >
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "#17a2b8" }}>
                            <CardContent>
                                <p>Bookmarks</p>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "#ffc107" }}>
                            <CardContent>
                                <p>Likes</p>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "#e83e8c" }}>
                            <CardContent>
                                <p>Events</p>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "grey" }} className='card4' >
                            <CardContent>
                                <p>Comments</p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <p style={{ position: "relative", display: "flex", marginLeft: "200px", marginTop: "50px" }} >Info Box With bg- grediant - *</p>
            <div style={{ marginTop: "30px", marginLeft: "160px" }} className='div2' >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}  >
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "#17a2b8" }}>
                            <CardContent>
                                <p>Bookmarks</p>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "#ffc107" }}>
                            <CardContent>
                                <p>Likes</p>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "#e83e8c" }}>
                            <CardContent>
                                <p>Events</p>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "grey" }} className='card4' >
                            <CardContent>
                                <p>Comments</p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ marginLeft: "159px", marginTop: "50px" }} >
                <p style={{ marginLeft: "25px" }} >Small Box</p>
                <Grid container spacing={2}  >
                    {/* First Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "#6f42c1" }}>
                            <CardContent>
                                <h1>125</h1>            </CardContent>
                        </Card>
                    </Grid>

                    {/* Second Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "#e83e8c" }} >
                            <CardContent>
                                <h1>53%</h1>

                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Third Card */}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "#ff1dce" }} >
                            <CardContent>
                                <h1>44</h1>    </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ width: '300px', height: '120px', margin: '0 10px', backgroundColor: "#00ff00 " }} >
                            <CardContent>
                                <h1>65</h1>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div className="chat-grid" style={{position:"relative", display:"flex", marginLeft:"168px", marginTop:"50px"}} >
            <div className="direct-chat-container"  >
                <div className="chat-messages" style={{height:"125px", width:"270px"}} >
                    {messages.map((message, index) => (
                        <div key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="message-input" >
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>

            <div className="direct-chat-container" style={{marginLeft:"30px"}} >
                <div className="chat-messages" style={{height:"125px", width:"270px"}}>
                    {messages.map((message, index) => (
                        <div key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="message-input">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
            <div className="direct-chat-container" style={{marginLeft:"25px"}} >
                <div className="chat-messages" style={{height:"125px", width:"270px"}} >
                    {messages.map((message, index) => (
                        <div key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="message-input">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
            <div className="direct-chat-container" style={{marginLeft:"25px"}} >
                <div className="chat-messages"   style={{height:"125px", width:"270px"}}>
                    {messages.map((message, index) => (
                        <div key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="message-input">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}

export default Widgets;
