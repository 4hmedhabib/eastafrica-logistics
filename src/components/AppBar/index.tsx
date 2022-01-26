import React, { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material'


const AppBarComponent: FC = (): JSX.Element => {
    return <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography>
                    eh
                </Typography>
            </Toolbar>
        </AppBar>
    </div>;
};

export default AppBarComponent;
