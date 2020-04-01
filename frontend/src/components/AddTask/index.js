import React, { Component } from 'react';

class AddTask extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.title.value,
      description: event.target.desc.value
    };
    console.log(data);
    fetch("http://localhost:3000/tasks", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then((respData) => {
      console.log(respData);
    }).catch((err) => {
      console.log(err);
    });
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
            <form onSubmit={event => this.handleSubmit(event)} className="appoinment-form">
              <div className="form-group col-md-6">
                <input required name="title" className="form-control" placeholder="Title" type="text" />
              </div>
              <div className="form-group col-md-6">
                <input required name="desc" className="form-control" placeholder="Description" type="text" />
              </div>
              <div className="form-group col-md-12 col-sm-12 col-xs-12">
                <button className="btn-submit" type="submit">Add to task list</button>
              </div>
            </form>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default AddTask;
