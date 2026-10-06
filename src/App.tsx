import { useEffect, useState } from "react";
import styled from "styled-components";
import ArtInstituteOfChicago from "./components/ArtInstituteOfChicago.tsx";
import type {Artworks} from "./interface/Artworks";

//the role of this component is to fetch the data
const ParentDiv = styled.div`
    margin: auto;
    display: flex;
    border: 5px black solid;
`;

export default function App(){
    //useState hook is used to store data
    const [data,setData] = useState<Artworks[]>([]);

    //useEffect hook is used for executing the side-effect, which in turn doing the error handling and re-rendering
    useEffect(() => {
        //the async fetchData() will wait until it receives promise
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.artic.edu/api/v1/artworks/search?q=cats");
            const {data} : {data: Artworks[]} = await rawData.json(); //transform the data I received into objects
            setData(data);
        }
        fetchData()
            .then(() => console.log("Data has been fetched successfully!"))
            //if there is any error
            .catch((e: Error) => console.log("There was an error: " + e));
        }, [data.length]
    );

  return (
      <ParentDiv>
          <ArtInstituteOfChicago data={data} />
      </ParentDiv>
  )
}


