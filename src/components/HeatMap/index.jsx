import { useState, useEffect } from "react";

import { Container } from './styles';

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Annotation,
} from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { geoCentroid } from "d3-geo" ;

import Mapa from "../../BrasilMap.json";

const geoUrl = Mapa;

const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "rgb(0, 255, 102)",
    "rgb(50, 255, 102)",
    "rgb(100, 255, 102)",
    "rgb(150, 255, 102)",
    "rgb(200, 255, 102)",
    "rgb(250, 255, 102)",
    "rgb(250, 200, 102)",
    "rgb(250, 150, 102)",
    "rgb(250, 100, 102)",
  ]);

const HeatMap = () => {
  const [data, setData] = useState([]);

  const offsets = {
    RN: [50, -8],
    PB: [34, 2],
    PE: [30, -1],
    AL: [28, 2],
    SE: [35, 10],
    ES: [34, 1],
    RJ: [33, 0],
    DF: [47, 10],
  };

  // eslint-disable-next-line 
  const dataMap = [
    {
      id: "AC",
      chats: 10,
    },
    {
      id:"CE",
      chats: 5,
    },
    {
      id:"BA",
      chats: 7,
    },
    {
      id:"PE",
      chats: 3,
    },
    {
      id:"RO",
      chats: 4,
    },
    {
      id:"SP",
      chats: 2,
    },
    {
      id:"RJ",
      chats: 1,
    },
    {
      id:"AM",
      chats: 5,
    },
  ];

  useEffect(() => {
    setData(dataMap);
  }, [dataMap]);

  return (
    <Container>
      <ComposableMap
        width={500}
        height={500}  
        style={{
          // border: "1px solid #ff0000",
          position: "absolute",
          height: "550px",
          width: "40vw",
        }}
        projectionConfig={{ scale: 600 }}
      >
        <ZoomableGroup zoom={1}>
          <Geographies
          stroke="#f8f8f8"
          geography={geoUrl}
          fill="#DDD"
          >
            {({ geographies }) =>
              geographies.map((geo) => {
                const cur = data.find((s) => s.id === geo.id);
                const centroid = geoCentroid(geo);
                console.log("centroid: ",centroid)
                return (
                  <>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colorScale(cur ? cur.chats : "#EEE")}
                    style={{
                      // default: {
                      //   fill: "#ECEFF1",
                      //   stroke: "#607D8B",
                      //   strokeWidth: 0.5,
                      //   outline: "none",
                      // },
                      hover: {
                        fill: colorScale(cur ? cur.chats : "#EEE"),
                        stroke: "#f8f8f8",
                        strokeWidth: 3,
                        outline: "none",
                      },
                      // pressed: {
                      //   fill: "#FF5722",
                      //   stroke: "#607D8B",
                      //   strokeWidth: 1,
                      //   outline: "none",
                      // },
                    }}
                  >
                 
                  </Geography>
                   <Annotation
                    subject={centroid}
                    dx={0}
                    dy={0}
                  >
                    <text 
                    x={-6} 
                    fontSize={8} 
                    fontFamily="Arial" 
                    fontWeight="light" 
                    alignmentBaseline="middle"
                    >
                      {geo.id}
                    </text>
                  </Annotation>  
                </>
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </Container>
  );
};

export default HeatMap;
