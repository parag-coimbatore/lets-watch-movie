import React, { useState } from "react";
import Axios from "axios"; 
import styled from "styled-components";
import MovieInfoComponent from "./Components/MovieInfo";
import MovieComponent from "./Components/MovieComponent";


export const API_KEY = "6f5e03c9";
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: black;
  color: white; //text color
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;


function App() {

  const [searchQuery, updateSearchQuery] = useState("");
  const [timeoutId, updateTimeoutId] = useState();
  const [selectedMovie, onMovieSelect] = useState();
  const [movieList, updateMovieList] = useState([]);

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
   console.log(response)
   updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout)
    
  };
  
  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="data:image/png;base64,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"/>
        Lets Watch Movie
        </AppName>
        <SearchBox> 
          <SearchIcon src="data:image/png;base64,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"/>
          <SearchInput  placeholder="Search Movie" value={searchQuery} onChange={onTextChange} onMovieSelect={onMovieSelect}/>
        </SearchBox>
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList ?.length 
        ? movieList.map((movie, index) => <MovieComponent  key={index}  movie={movie} onMovieSelect={onMovieSelect}/>) : "No movies Search"}        
      </MovieListContainer>
      
    </Container>
  );
}

export default App;
