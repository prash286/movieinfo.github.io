import React from "react";
import { Typography, Button, Box } from "@mui/material";
import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";

export default function PageNotFound() {
  const moveBack = useMoveBack();

  const StyledPageNotFound = styled("main")`
    height: 100vh;
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4.8rem;
  `;

  return (
    <StyledPageNotFound>
      <Box>
        <Typography variant="h4">
          The page you are looking for could not be found 😢
        </Typography>
        <Button onClick={moveBack} variant="contained">
          &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}
