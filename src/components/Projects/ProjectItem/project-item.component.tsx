import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const ProjectItem: React.FC = () => {
    return (
        <Box m={3} color="#484a4d">
            <Button color="primary" variant="outlined">
                Learn more
            </Button>
        </Box>
    );
};

export default ProjectItem;
