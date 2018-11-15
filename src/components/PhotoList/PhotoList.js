import React from 'react';
import { Row, Col } from 'reactstrap';
import Photo from '../Photo/Photo.js';

const PhotoList = ({photos}) =>  {

  //Photoをレンダリング
  const renderPhoto = (photo) =>{
    //md="4"にしてレスポンシブ対応
    //mapやforを利用してloop処理を使うときはattributeに一意となるkey情報を定義する
    return <Col key = {photo.id} md="4"><Photo photo={photo} /></Col>;
  }

  return (
    <Row>
    {
      //mapを使用してデータ数に応じて Photo をレンダリングする
      photos.map((photo) =>{
        return renderPhoto(photo);
      })
    }
    </Row>
  );
}

export default PhotoList;
