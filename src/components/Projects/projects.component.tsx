import React from 'react';
import { ProjectsWrapper } from './projects.styles';
import ProjectItem from './ProjectItem/project-item.component';
import Typography from '@material-ui/core/Typography';

const Projects: React.FC = () => {
    return (
        <ProjectsWrapper>
            <Typography color="textPrimary" align="center" variant="h3">
                Projects:
            </Typography>
            <ProjectItem />
        </ProjectsWrapper>
    );
};

export default Projects;
