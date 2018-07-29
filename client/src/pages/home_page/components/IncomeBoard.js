import React, { Component } from "react";
import "./IncomeBoard.css";
import NewIncomeModal from "./NewIncomeModal";
import Popup from "reactjs-popup";
import axios from 'axios';


class IncomeBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
 
    }
  }


  componentDidMount() {
  axios
    .get("http://localhost:3002/api/v1/category.json")
    .then(response => {
      
      this.setState({
        categories: response.data
      });
    })
    .catch(error => console.log(error));

  }

getIncomeCategory = () => {

  var obtained_categories = this.state.categories;
  var income_category = [];

  obtained_categories.forEach(function(element){
    if (element.board_type === 'income'){

      income_category.push(element)

      


    }
  })

  return income_category;


}





  render() {

    const income_categories =this.getIncomeCategory();
    

    

    return (
      <div className="income-board col-md-3 py-4 text-center">
        <h4>Income Boards</h4>
        {income_categories.map((category)=>{
          return(
          <div key={category.id}  className="card my-2 mx-auto">
            <div className="card-body">
              <h5 className="card-title">{category.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{category.current_total}</h6>
            </div>
          </div>
          )
        })}


          
          
        <Popup
          trigger={
            <button type="button" className="btn btn-lg income-btn">
              Add Income Source
            </button>
          }
          modal
          closeOnDocumentClick
        >
          <NewIncomeModal />
        </Popup>
      </div>
    );
  }
}

export default IncomeBoard;
