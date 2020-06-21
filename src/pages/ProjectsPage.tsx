import React from 'react';
import { Route } from 'react-router-dom';

import ProjectsOverview from '../components/ProjectsOverview';
import ProjectDetails from '../components/ProjectDetails';

const ProjectsPage = ({ match }) => {
    return (
        <>
            <Route exact path={`${match.path}`} component={ProjectsOverview} />
            <Route path={`${match.path}/:id`} component={ProjectDetails} />
        </>
    );
};

export default ProjectsPage;
