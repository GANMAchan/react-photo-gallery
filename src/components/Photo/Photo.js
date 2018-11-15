import React from 'react';
import { Card, CardImg, CardBody, CardText } from 'reactstrap';
import './Photo.css';

const Photo = ({photo}) => {

  //window.openを用意
  const onClick = (url) =>{
      window.open(url, '_blank');
  }

  //Reactstrap ComponentのCardを参考に作成
  return (
    <Card className="mb-3 text-center">
      <CardImg
        top width="250px"
        height="250px"
        //propsとして渡されたphotoデータを使用
        src={photo.webformatURL}
        //写真をクリックしたらそのページに遷移
        onClick={() => onClick(photo.pageURL)} />
      <CardBody>
        <CardText>{photo.user}</CardText>
      </CardBody>
    </Card>
  );
}

export default Photo;
