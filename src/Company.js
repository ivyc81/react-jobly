import React, { Component } from 'react';
import JobCard from './JobCard';
import JoblyApi from './JoblyApi';
import Alert from './Alert';

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

  render() {
    const jobs = this.state.jobs.map(job => (
      <JobCard key={job.id}
               title={job.title}
               salary={job.salary}
               equity={job.equity} />
    ));

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