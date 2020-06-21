import React from 'react';
import { Route } from 'react-router-dom';

import ProjectDetails from '../components/ProjectDetails';

const ProjectsPage = ({ match }) => {
    return <Route path={`${match.path}/:id`} component={ProjectDetails} />;
};

export default ProjectsPage;
