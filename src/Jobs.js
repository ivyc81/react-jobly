import React, { Component } from 'react';
import JobCard from './JobCard';
import Search from './Search';
import JoblyApi from './JoblyApi';
import Alert from './Alert';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      errorMessage: "",
      isLoading: true,
    };
    this.searchJobsByTerm = this.searchJobsByTerm.bind(this);
  }

  async componentDidMount() {
    try{
      let jobs = await JoblyApi.getJobs();
      this.setState({ jobs , isLoading: false});
    } catch(err) {
      this.setState({ errorMessage: err, isLoading: false })
    }
  }

  async searchJobsByTerm(searchTerm) {

    let jobs = await JoblyApi.searchJobs(searchTerm);
    this.setState({ jobs });
  }

   renderJobCard(){
    let appliedJobID = new Set();
    this.props.currUser.jobs.forEach(job => appliedJobID.add(job.id) );
    const jobs = this.state.jobs.map(job => {
      let isApplied =false;

      if(appliedJobID.has(job.id)){
        isApplied=true;
      }
      return(
      <JobCard key={job.id}
               title={job.title}
               salary={job.salary}
               equity={job.equity} 
               id={job.id}
               currUser={this.props.currUser}
               triggerApplyJob={this.props.triggerApplyJob} 
               isApplied={isApplied}/>
    )});
        return jobs;
  }

  render() {
  
    const jobs = this.renderJobCard();

    return (
      <div className='Jobs'>
        {this.state.isLoading ? <p>...Loading</p> :
          <div>
            {!this.state.errorMessage
            ?
              <div>
                <Search triggerSearch={ this.searchJobsByTerm } />
                { jobs }
              </div>
            :
              <Alert errors={this.state.errorMessage} />
          }
          </div>
        }
      </div>
    );
  }
}

export default Jobs;