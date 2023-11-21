import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";

const Contacts = () => {
  const [data, setData] = useState([]);
  const [per, setPer] = useState(9);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const uppercase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const loadData = useCallback(() => {
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        setData((prevData) => [...prevData, ...json.results]);
        setTotalPages(json.info.results);
      });
  }, [per, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="clearfix" style={{ marginLeft: "205px", marginTop: "50px" }}>
      <Grid container spacing={2}>
        {data.map((userData, index) => (
          <Grid item xs={12} sm={6} md={4} key={userData.id.value}>
            <Card>
              <div className="avatar">
                <img
                  src={userData.picture.large}
                  className="card-img-top"
                  alt=""
                />
              </div>
              <CardContent>
                <Typography variant="h6">
                  {uppercase(userData.name.first) +
                    " " +
                    uppercase(userData.name.last)}
                </Typography>
                <Typography variant="body2">
                  {userData.location.city +
                    ", " +
                    uppercase(userData.location.state)}
                  <br />
                  <span className="phone">{userData.phone}</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <button
        className="btn btn-light btn-block w-50 mx-auto"
        onClick={loadMore}
      >
        Load More Users
      </button>
    </div>
  );
};

export default Contacts;
