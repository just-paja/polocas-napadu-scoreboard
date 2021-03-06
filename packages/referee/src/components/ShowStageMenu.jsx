import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import React from 'react';

import { Children, Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';
import { STAGE_OPTIONS, STAGES_JUMP } from 'core/constants';

const styles = theme => ({
});

class ShowStageMenu extends React.Component {
  constructor() {
    super();
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = {
      anchorEl: null,
    };
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  handleOpen(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  render() {
    const { matchId, mutate, omit } = this.props;
    return (
      <React.Fragment>
        <IconButton onClick={this.handleOpen}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={this.state.anchorEl}
          onClose={this.handleClose}
          open={Boolean(this.state.anchorEl)}
        >
          {STAGE_OPTIONS
            .filter(option => (
              STAGES_JUMP.indexOf(option.value) !== -1 &&
              omit.indexOf(option.value) === -1
            ))
            .map(option => (
              <MenuItem
                key={option.value}
                onClick={() => mutate({
                  refetchQueries: ['MatchStage'],
                  variables: {
                    matchId,
                    stage: option.value,
                  },
                })}
              >{option.label}</MenuItem>
            ))}
        </Menu>
      </React.Fragment>
    );
  }
}

ShowStageMenu.propTypes = {
  children: Children,
  classes: Classes.isRequired,
  mutate: PropTypes.func.isRequired,
  omit: PropTypes.arrayOf(PropTypes.string),
};

ShowStageMenu.defaultProps = {
  omit: [],
};

export default withStyles(styles)(ShowStageMenu);
