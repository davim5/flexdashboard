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


  // Array com id dos Estados que não cabem no mapa
  const offsets = [
    "RN",
    "PB",
    "PE",
    "AL",
    "SE",
    "ES",
    "RJ",
    "DF"
  ];

  // eslint-disable-next-line 
  const dataMap = [
    {
      id: "AC",
      chats: 10,
    },
    {
      id:"CE",
      chats: 10,
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
    {
      id:"GO",
      chats: 3,
    },
    {
      id: "DF",
      chats: 7,
    },
    {
      id: "RS",
      chats: 0,
    }
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
        {/* <ZoomableGroup zoom={1}> */}
          <Geographies
          stroke="#f8f8f8"
          geography={geoUrl}
          fill="#DDD"
          >
            {({ geographies }) =>
              geographies.map((geo) => {
                const cur = data.find((s) => s.id === geo.id);
                const centroid = geoCentroid(geo);
                return (
                  <>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colorScale(cur ? cur.chats : "#EEE")}
                    style={{
                      default: {
                        outline: "none",
                      },
                      hover: {
                        fill: colorScale(cur ? cur.chats : "#EEE"),
                        stroke: "#f8f8f8",
                        strokeWidth: 3,
                        outline: "none",
                      },
                      pressed: {
                        outline: "none",
                      },
                    }}
                  >
                 
                  </Geography>
                  { offsets.find((s) => s === geo.id) ? 
                  // Estados que não cabem no mapa
                   (<Annotation
                    subject={centroid}
                    dx={40}
                    dy={-8}
                    connectorProps={{
                      stroke: "#f8f8f8",
                      strokeWidth: 1,
                      strokeLinecap: "round"
                    }}
                   >
                   <text
                   fontSize={10} 
                   fontFamily="Arial" 
                   fontWeight="light" 
                   alignmentBaseline="middle"
                   >
                     {geo.id}
                   </text>  
                   </Annotation>)
                    :   
                   (<Annotation
                    subject={centroid}
                    dx={0}
                    dy={0}
                    >
                    <text 
                    x={-6} 
                    fontSize={10} 
                    fontFamily="Arial" 
                    fontWeight="light" 
                    alignmentBaseline="middle"
                    >
                      {geo.id}
                    </text>
                   </Annotation>) }  
                </>
                );
              })
            }
          </Geographies>
        {/* </ZoomableGroup> */}
      </ComposableMap>
    </Container>
  );
};

export default HeatMap;
