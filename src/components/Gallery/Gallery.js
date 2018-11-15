import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBox from '../SearchBox/SearchBox.js';
import PhotoList from '../PhotoList/PhotoList.js';
import './Gallery.css';

class Gallery extends Component{
  render(){
    return(
      <Container className="gallery-container">
        <Row className="mb-5">
          {/*検索ボックスを中央に配置するためoffsetを利用*/}
          <Col md={{size:6,offset:3}}>
            {/*propsとしてsearchを渡す*/}
            <SearchBox search={this.search}/>
          </Col>
        </Row>
        {/*PhotoListをSearcgBoxの下に配置*/}
        <PhotoList photos={this.state.photos}/>
      </Container>
    );
  }

    //画像の情報を保存する配列を用意
    constructor(props){
      super(props);
      this.state = {photos:[]}
    }

    //componentWillMountの処理でデータを取得
    componentWillMount(){
      this.search("");
    }

  //keywordに合致する画像を取得する関数
  search = (keyword) =>{
    //データを取得するのでGETを利用
    const param = {method:"GET"};
    //WebAPIのリクエストパラメータを作る
    //W// process.env から API Key を参照する
    const url = "https://pixabay.com/api/?key=" + process.env.REACT_APP_API_KEY
      + "&q=" + keyword.toLowerCase()
      + "&image_type=photo"
      + "&min_width=200&min_height=200";
    //fetchを使い非同期通信を行う
    fetch(url,param)
      //レスポンスをJSONに変換
      .then(response => response.json())
      .then(data =>{
        //検索結果を元にphotosを更新
        this.setState({photos:data.hits});
      })
      .catch(console.log);
  }
}

export default Gallery;
