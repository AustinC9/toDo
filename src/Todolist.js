import React, { Component } from "react";
//import TodoList from "./App";

class VizList extends Component {
  // constructor(props){
  //   super(props);
  // }  
//   createList(item) {
    
    
// }
  
render() {
  var toDoEntries = this.props.entries;
  var self = this;
  var listItem = toDoEntries.filter(todoEntry=> todoEntry.isChecked!==true).map(function(item){
    return (
      //<li key={item.key}>{item.text}</li>
      <div key={item.key} className="form-check">
        <input
          //checked={self.props.amiChecked}
          className="form-check-input"
          type="checkbox"
          onChange={()=>self.props.handleTodoCheck(item.key)}

          
        ></input>
        <label className="form-check-label">
          {item.text}
        </label>
      </div>

);
  }); //.filter(this.createList)
  
  return <ul className="theList">{listItem}</ul>;
    
}
}

export default VizList;

/* <button>{item.text}</button> //list factory */