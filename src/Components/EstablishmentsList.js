import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { ListItem, ListItemButton, ListItemSecondaryAction } from "@mui/material";

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
      <ListSubheader sx={{ fontWeight: "bold", color: "#000000" }}>
        Estabelecimentos
      </ListSubheader>
      {establishments.map((establishment, index) => (
        <ListItem key={index}>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt={establishment.name} src={establishment.image} />
            </ListItemAvatar>
            <ListItemText primary={establishment.name} />
            <ListItemSecondaryAction>
              {statusColors[index]}
            </ListItemSecondaryAction>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
