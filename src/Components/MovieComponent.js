import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;

const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  //to stop the overflow of thr text
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;

const MovieComponent = (props) => {
    return<MovieContainer>
        <CoverImage src="https://tfipost.com/wp-content/uploads/2019/07/amit-shah_8-640x375.jpg"/>
        <MovieName>Amit shah the indian chanakya. Call to destroy govt</MovieName>
        <InfoColumn>
            <MovieInfo>Year:  2012</MovieInfo>
            <MovieInfo>Type:  Movie</MovieInfo>
         </InfoColumn>
    </MovieContainer>
    
  
};
export default MovieComponent;