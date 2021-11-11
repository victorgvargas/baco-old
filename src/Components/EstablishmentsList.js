import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";

const GreenStatus = styled.span`
  color: green;
`;

const RedStatus = styled.span`
  color: red;
`;

export default function EstablishmentsList() {
  const [establishments, setEstablishments] = useState([]);
  const [statusColors, setStatusColors] = useState([]);

  const toggleStatusColor = (status) => {
    return status.toLowerCase() === "aberto" ? (
      <GreenStatus>{status}</GreenStatus>
    ) : (
      <RedStatus>{status}</RedStatus>
    );
  };

  useEffect(() => {
    axios
      .get("./establishments.json")
      .then((establishments) => {
        setEstablishments(establishments.data);
        return establishments.data;
      })
      .then((establishments) =>
        setStatusColors(
          establishments.map((establishment) =>
            toggleStatusColor(establishment.status)
          )
        )
      );
  }, [establishments]);

  return (
    <List>
      <ListSubheader>Estabelecimentos</ListSubheader>
      {establishments.map((establishment, index) => (
        <ListItem key={index} secondaryAction={statusColors[index]}>
          <ListItemAvatar>
            <Avatar alt={establishment.name} src={establishment.image} />
          </ListItemAvatar>
          <ListItemText primary={establishment.name} />
        </ListItem>
      ))}
    </List>
  );
}
