import React, { Component } from 'react';
import JobCard from './JobCard';
import JoblyApi from './JoblyApi';
import Alert from './Alert';
import './Company.css';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      description: '',
      name: '',
      errorMessage: '',
      isLoading: true,
    }
      this.renderJobCard = this.renderJobCard.bind(this);
  }

  async componentDidMount() {
    try{
      let company = await JoblyApi.getCompany(this.props.handle);
      this.setState({
        jobs: company.jobs,
        description: company.description,
        name: company.name,
        isLoading: false,
      });
    }
    catch(err) {
      this.setState({ errorMessage: err, isLoading: false });
    }
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
      <div className='Company'>
        {this.state.isLoading ? <p>...Loading </p>
          :
          <div>
            {!this.state.errorMessage
            ?
              <div>
                <h2>{this.state.name}</h2>
                <p>{this.state.description}</p>
                {jobs}
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

export default Company;