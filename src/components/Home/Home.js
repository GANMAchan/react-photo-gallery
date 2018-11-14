import React from 'react';
import { Button, Container } from 'reactstrap';
import './Home.css';

const Home = ({onRouteChange}) =>{
    return(
    <div className="home">
     <Container className="text-center text-white">
      <h1>テスト</h1>
      <p>ああああああああああああああ</p>
      <Button
         color="default"
         className="mt-5 btn-ghost btn-white"
         onClick={() =>onRouteChange("gallery")}>
      More Detail
      </Button>
     </Container>
    </div>
   );
 }


export default Home;
