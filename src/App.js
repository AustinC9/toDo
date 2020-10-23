import React, { Component } from "react";
import VizList from "./Todolist";

class TodoList extends Component {
  constructor(props) {
    super(props);
    //create state object
    //create a ref to store the textInput DOM element
    //this.textInput = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this);
    this.state = {
      //set empty items array
      newTodo: "",
      items: [],
      //isChecked: false,
      //completed:[],
    };
    this.inputElement = (element) => {
      this.textInput = element;
    };
    
    this.addItem = this.addItem.bind(this);
    this.userInput = this.userInput.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    
  }
  addItem(e) {
    //focus the text input using raw dom API
    //this.textInput.current.focus();
    //console.log(this.inputElement.value);
    if (this.state.newTodo !== "") {
      //var n = new Date()
      var newItem = {
        //checked: false,
        
        text: this.state.newTodo,
        key: new Date().getTime(),
        status: "active",
      };
      console.log(this.key);

      this.setState((prevState) => {
        return {
          newTodo: "",
          // using .concat to add new item to previous state
          items: prevState.items.concat(newItem),
        };
      });
      // this..value = "";
    }
    e.preventDefault();
    //console.log(this.textInput);
  }
  //function to change status from active to completed
  //when the checkbox is clicked
  //if click checked = true then change status to completed
  //hide complete
  //still show active
  //create a proxy array of state items tempArr
  //modify tempArr
  //setstate to new tempArr
  changeStatus(key) {
    console.log("hello");
    //console.log(this.isChecked)
    console.log(key)
    let tempArr = this.state.items.map(function(item, index){
      if (item.key === key) {
        item.status = item.status === "active" ? "completed" : "active"
        
      }
      return item
    })
    this.setState({items: tempArr})
    // if (this.state.newTodo === this.state.newTodo) {
    //   //var n = new Date()
    //   var newItem = {
    //     //checked: false,
        
    //     // text: this.state.newTodo,
    //     // key: new Date().getTime(),
    //     // status: "active",
        
    //   };
    //   console.log(this.key);

    //   this.setState((newState) => {
    //     return {
    //       newTodo: "",
    //       // using .concat to add new item to previous state
    //       items: newState.items.splice(newItem),
    //     };
    //   });
    //   // this..value = "";
    // }

    
    

  }
  
  componentDidUpdate() {
    localStorage.setItem("items", JSON.stringify(this.state.items));
  }
  componentDidMount() {
    if (localStorage.getItem("items")) {
      var todolist = JSON.parse(localStorage.getItem("items"));
      this.setState({
        items: todolist,
      });
    }
  }
  
  //   componentDidMount(){
  //     //this.stuff = JSON.parse(localStorage.getItem('list'));
  //     if (localStorage.getItem('list') != null){
  //       var todolist = JSON.parse(localStorage.getItem('list'));
  //       this.setState({
  //         list: todolist,
  //       })
  //     }
  //     if (localStorage.getItem('complete') != null){
  //       var completed = JSON.parse(localStorage.getItem('complete'));
  //       this.setState({
  //         complete: completed,
  //       })
  //   }
  // }
  //   componentDidUpdate() {
  //     localStorage.setItem('list', JSON.stringify(this.state.list));
  //     localStorage.setItem('complete', JSON.stringify(this.state.complete))
  //   }
  // componentDidUpdate() {
  //   console.log(this.state.items);
  //   console.log(this.state);
  //   localStorage.setItem('list', JSON.stringify(this.state.list))
  //   localStorage.setItem('complete', JSON.stringify(this.state.complete))
  // }
  userInput(e) {
    //console.log(e.target.value);
    this.setState({
      newTodo: e.target.value,
    });
    //localStorage.setItem('list, JSON.stringify(this.');
  }
  // deleteItem(){
  //   this.setState
  // }
  // listTodo(){
  //   let list = this.items.map()
  //   //console.log(list);
  // }
  render() {
    
    return (
      
      //create input box
      //add a button to submit

      <div className="container mx-auto">
        {/* <div className="input-group mb-3 todoListMain">
      <div className="form-controlheader">
        {/* <form onSubmit={this.addItem}>
          {/* trickery from internet using ref */}
        {/* <input
            value= {this.state.newTodo}
            type="text"
            onChange={this.userInput}
            placeholder="enter task"
          ></input> */}
        {/* </div> <button className="btn btn-outline-primary" type="submit">Add</button>
        </form> */}
        {/* </div> */}
        {/* </div> */}

        <div className="input-group input-group-lg mx-auto my-auto w-25">
          <form onSubmit={this.addItem}>
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="submit">
                Add
              </button>
            </div>
            <input
              value={this.state.newTodo}
              type="text"
              className="form-control"
              onChange={this.userInput}
              placeholder="Enter Task"
            ></input>
          </form>
        </div>
        <VizList entries={this.state.items} amiChecked={this.state.isChecked} handleTodoCheck={this.changeStatus} />
      </div>
    );
  }
}

export default TodoList;

//Add items
//display items
//some style
//remove items
//possibly animate
//need a function to list inputted values after hit add
//map over items array and print the items
//
