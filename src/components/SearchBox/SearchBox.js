import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import {FaSearch} from 'react-icons/fa';


class SearchBox extends React.Component {
  //入力したキーワードを持つ値を空文字で用意
  constructor(props){
    super(props);
    this.state = {keyword:""}
  }

  //keywordをsetStateで更新
  onChange = (e) =>{
    this.setState({keyword:e.target.value});
  }

  //Enterを押したときにkeywordを取得
  onKeyPress = (e) =>{
    if(e.key ==="Enter"){
      this.props.search(this.state.keyword);
    }
  }

  //検索ボタンを押したときにkeywordを取得
  onClick = () =>{
    this.props.search(this.state.keyword);
  }

  //Reactstrap Component を組み合わせて SearchBox を作成
  render() {
    return (
      <InputGroup>
        <Input type="search" name="search" placeholder="Enter Keyword!"
          //入力値が変わるたびにonChangeを呼ぶ
          onChange={(e) => this.onChange(e)}
          onKeyPress={(e)=>this.onKeyPress(e)}>
        </Input>
        <InputGroupAddon addonType="append">
          <Button color="dark" onClick={()=>this.onClick()}>
           <FaSearch />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }

}

export default SearchBox;
