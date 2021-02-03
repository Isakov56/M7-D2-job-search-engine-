import React, { Component } from 'react';
import {ListGroup } from 'react-bootstrap'
import {Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Jobs extends Component {
    render() {
        return (
            <div>
{console.log('here are they', this.props.jobsFound)}
                {this.props.jobsFound.map((job, index) => (
                <ListGroup className="mt-2" onClick={() => this.props.selectedJobHandler(job)}>
                    <ListGroup.Item>
                        <div className="d-flex justify-content-between">
                            <Link to="/details" >{job.title}</Link>
                            <small>{job.location}</small>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <small>{job.company}-</small>
                                <small className="text-secces">{job.type}</small>
                            </div>
                            <small>{}</small>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                ))}
            </div>
        );
    }
}

export default withRouter(Jobs);