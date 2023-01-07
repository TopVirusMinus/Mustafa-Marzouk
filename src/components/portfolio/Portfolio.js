import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid, Slide } from "@mui/material";

import { info } from "../../info/Info";

export default function Portfolio() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"center"}>
        {info.portfolio.map((project, index) => (
          <Slide in={true} direction="up" timeout={800}>
            <Grid item xs={12} md={6} key={index}>
              <PortfolioBlock
                displayType={project.displayType}
                image={project.image}
                live={project.live}
                source={project.source}
                title={project.title}
                technologies={project.technologies}
              />
            </Grid>
          </Slide>
        ))}
      </Grid>
    </Box>
  );
}
