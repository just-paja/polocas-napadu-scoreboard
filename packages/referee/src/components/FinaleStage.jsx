import React from 'react';

import { Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';
import {
  TEAM_SIDE_LEFT,
  TEAM_SIDE_RIGHT,
} from 'core/constants';

import BoardLayout from './BoardLayout';
import ControlsLayout from './ControlsLayout';
import MainControls from './MainControls';
import Team from './Team';

const styles = {
  inspiration: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
};

const FinaleStage = ({ classes }) => (
  <ControlsLayout>
    <BoardLayout>
      <Team side={TEAM_SIDE_LEFT} />
      <Team side={TEAM_SIDE_RIGHT} />
    </BoardLayout>
    <MainControls center>
      <h1>Konec</h1>
    </MainControls>
  </ControlsLayout>
);

FinaleStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(FinaleStage);
