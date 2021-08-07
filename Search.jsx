import React, { Component } from 'react';
import './components.css';
import service from './service.js';
export default class Search extends Component {
    state = {
        data: [],
        items: [],
        value:0,
        selecteditems: []
    }
    filterList = (event) => {
        let itemlist = this.state.data;
        let itemslist1=[];
        itemlist.forEach(function (arrayItem) {
        if(arrayItem.name.startsWith(event.target.value)){
            itemslist1.push(arrayItem);
        }})
        this.setState({items: itemslist1});
    };
    componentWillMount = () => {
      this.setState({
          data: this.props.content,
      })
    }
    setSwitchNameHandler=(name,value) =>{
          const ct=document.getElementById("count").value;
          var res="";
          var newArr = this.state.selecteditems;
          newArr.push([name,value]);
          this.setState({selecteditems:newArr})
          this.state.selecteditems.map(item=>(
            res=res+"name: "+item[0]+" calories: "+ct*parseInt(item[1])+"\n"
          ))
          alert("selecteditems are:\n "+res);
          service.sharedData=this.state.selecteditems;
          console.log(this.state.selecteditems)
          }
    
    render() {
        return (
        <div> 
            <h1 align="left" id="h1">Search</h1>
           <form><input type="text" className="form" placeholder="Find a food" onChange={this.filterList}/>
            </form>
            {this.state.items.map(item => (
                <div className="flex-container"><div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image">
                      <img className="foodpic" src={item.img} alt={item.img} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>                                            
                        <strong>{item.name}</strong> <br />
                        <small>{item.calories}</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field-has-addons">
                      <div className="control">
                        <input className="input" id="count" type="number" min="1" max="10"/>
                      </div>
                      <div className="control">
                        <button className="button-is-info" onClick={this.setSwitchNameHandler.bind(this,item.name,item.calories)}> +</button>
                      </div>
                    </div>
                  </div>
                </article>
                </div>
        </div>)
        )}
        </div>
            )
}

}