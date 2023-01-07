import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
  const { displayType, image, live, source, title, technologies } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {displayType === "image" && (
        <Box component={"img"} src={image} alt={"mockup"} />
      )}
      {displayType === "yt" && (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe
          width="80%"
          height="407.25px"
          src={image}
          title="Hashmaps Introduction (Arabic)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          style={{ marginBottom: "8em" }}
        ></iframe>
      )}
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <i style={{ color: "#9c9c9c", paddingTop: ".2em" }}>
        {technologies.join(", ")}
      </i>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={live} title={"Live Demo"} icon={"fa fa-safari"} />
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
