import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class ListTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }

  componentDidMount(){
    this.getTasks();
  }

  getTasks(){
    fetch("http://localhost:3000/tasks", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    // .then(response => response.json())
    .then(data => this.setState({ hits: data }))
    .catch((err) => {
      console.log(err);
    });
  }

  editTask(id){
    browserHistory.push('/edit/'+id);
  }

  deleteTask(id){
    fetch("http://localhost:3000/tasks/"+id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    // .then(response => response.json())
    .catch((err) => {
      console.log(err);
    });

    this.getTasks();
  }

  render() {
    const { hits } = this.state;
    return (
      <div className="section-content-block section-process">
        <div className="col-md-12 col-sm-12 text-center">
          <h2 className="section-heading"><span>Task</span> Scheduler</h2>
          <p className="section-subheading">Because every scheduled task saves time, efforts and money...</p>
        </div>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 appointment-form-wrapper clearfix">
          
            <table className="table text-center table-striped">
              <thead>
                <tr>
                  <th className="text-center">Title</th>
                  <th className="text-center">Description</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {hits.map(hit =>
                  <tr>
                    <td> {hit.task_name} </td>
                    <td> {hit.task_description} </td>
                    <td> 
                      <button type="button" className="btn btn-warning" onClick={() => {this.editTask(hit.task_id)}}>Edit</button>
                      <button type="button" className="btn btn-danger" onClick={() => {this.deleteTask(hit.task_id)}}>Delete</button>
                    </td>
                  </tr>
                )}
              </tbody>   
            </table>
        
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default ListTask;
