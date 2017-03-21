import React from 'react';
// import cx from 'classnames';
import { observer } from 'mobx-react';
import { dispatch } from 'rfx-core';

// import styles from '@/shared/styles/AppBar.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
// const openNavBtn = cx('link', 'bn', 'ph3', 'pv3', 'fl', 'bg-transparent', 'pointer', '_c1');
// const appBar = cx('animated', 'fadeIn', 'fixed', 'w-100', 'db', 'dt-l', 'bg-black-30');

// events
const handleNavToggle = (e) => {
  e.preventDefault();
   // eslint-disable-next-line
  alert('onTouchTap triggered on the title component');
  dispatch('ui.appNav.open');
};

export default observer(() => (
  <AppBar
    title="Title"
    onLeftIconButtonTouchTap={handleNavToggle}
    zDepth={0}
    iconElementRight={<IconButton><Search /></IconButton>}
  />
));
