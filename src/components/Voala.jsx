import {Component} from 'react'


class Voala extends Component{
  constructor(props){
    super(props)
    this.state= {count: 0}
  }
  onPlus=()=>{
    this.setState({count:this.state.count+1})
  }
  onMinus=()=>{
    this.setState({count: this.state.count-1})
  }
  onReset=()=>{
    this.setState({count: this.state.count=0})
  }
  render(){
    return(
      <div>
        {this.state.count}
        <button onClick={this.onPlus}>Plus</button>
        <button onClick={this.onMinus}>Minus</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    )
  }
}

export default Voala