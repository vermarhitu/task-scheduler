import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class EditTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: ""
    };
    this.getTask();
  }

  getTask(){
    fetch("http://localhost:3000/tasks/"+this.props.params.id, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      

      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  editTask(event){
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      description: event.target.desc.value
    };
    console.log(data);
    fetch("http://localhost:3000/tasks/"+this.props.params.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).catch((err) => {
      console.log(err);
    });

    browserHistory.push('/list');
  }

  render() {
    return (
      <div className="section-content-block section-process">
        <div className="col-md-12 col-sm-12 text-center">
          <h2 className="section-heading"><span>Task</span> Scheduler</h2>
          <p className="section-subheading">Because every scheduled task saves time, efforts and money...</p>
        </div>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 appointment-form-wrapper text-center clearfix">
            
              <form onSubmit={event => this.editTask(event)} className="appoinment-form">
                <div className="form-group col-md-6">
                  <input required name="name" className="form-control" placeholder="Title" type="text"/>
                </div>
                <div className="form-group col-md-6">
                  <input required name="desc" className="form-control" placeholder="Description" type="text"/>
                </div>
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <button className="btn-submit" type="submit" >Update Task</button>
                </div>
              </form>
            
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default EditTask;
