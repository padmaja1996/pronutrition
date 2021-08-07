import React, { Component } from 'react';
import './food.css';
class Food extends Component {
  state = {
    data: [],
    selecteditems: []
  }
    setButtonHandler=(event) =>{
      const ct=document.getElementById("count").value;
      alert("Number of counts: "+ct+1);
      alert("Calories: "+this.props.calories);
      this.setState({selecteditems:this.state.selecteditems.push([event.target.name,event.target.calories])})
      }
    componentWillMount = () => {
        this.setState({
            data: this.props.content,
        })
      }
    render() {

          return (<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image">
        <img className="foodpic" src={this.props.img} alt={this.props.img} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field-has-addons">
        <div className="control">
          <input className="input" id="count" type="number" min="1" max="10"/>
        </div>
        <div className="control">
          <button className="button-is-info" onClick={this.setButtonHandler}> +</button>
        </div>
      </div>
    </div>
  </article>
  </div>)}
}

export default Food;