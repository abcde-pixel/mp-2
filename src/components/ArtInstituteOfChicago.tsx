import styled from "styled-components";
import type {Artworks} from "../interface/Artworks";

//the role of this component is to display UI by using the data from App.tsx
const AllArtworkDiv = styled.div`
      display: flex;
      background-color: beige;
      padding: 20px;
      flex-flow: row wrap; //arrange elements horizontally and automatically wrap when space is insufficient
`;

const SingleArtworkDiv = styled.div`
      display: flex;
      flex-direction: column;
      border: 2px black solid;
      background-color: white;
      margin: 30px;
      padding: 20px;
      width: 300px;
      font-size: calc(2px + 0.8vw);
      font-family: Poppins, "Helvetica Neue", Helvetica, sans-serif;
`;
export default function ArtInstituteOfChicago(props: {data: Artworks[]}) {
    return (
        <AllArtworkDiv>
            {
                //the function of the map() function is to transform every artwork object into a
                //JSX element to render a dynamic list of items on a web page efficiently
                props.data.map((artwork: Artworks) =>
                    <SingleArtworkDiv key={artwork.id}>
                        <h3>{artwork.id}</h3>
                        <h3>{artwork.title}</h3>
                        <img src={artwork.thumbnail?.lqip} alt={artwork.thumbnail?.alt_text} />
                        <p>{artwork.thumbnail == null ? "Sorry, the image does not exist" : ""}</p>
                        <h3>{"score= " + artwork._score}</h3>
                    </SingleArtworkDiv>
                )
            }
        </AllArtworkDiv>
    );
}