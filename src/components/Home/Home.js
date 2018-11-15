import React from 'react';
import { Button, Container } from 'reactstrap';
import './Home.css';

const Home = ({onRouteChange}) =>{
    return(
    <div className="home">
     {/*カスタムCSSのクラスを加える*/}
     <Container className="text-center text-white">
      <h1>テスト</h1>
      <p>ああああああああああああああ</p>
      {/*ボタンのCSS指定*/}
      {/*onClickでonRouteChangeを読んで因数としてgalleryを渡す*/}
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
