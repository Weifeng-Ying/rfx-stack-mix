/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import { observer } from 'mobx-react';
import { dispatch } from 'rfx-core';
import cx from 'classnames';

// styles
import styles from '@/shared/styles/AppNav.css';

// components
import Drawer from 'material-ui/Drawer';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
// import { Link } from 'react-router';

const SelectableList = makeSelectable(List);

const handleOnRequestChange = (open) => {
  dispatch('ui.appNav.open', open);
};

// const handleOnClick = () => {
//   dispatch('ui.appNav.open', false);
// };

export default observer(({ /* children, */ open, docked }) => (
  <Drawer
    className={cx(styles.drawer)}
    open={open}
    docked={docked}
    onRequestChange={handleOnRequestChange}
  >
    <SelectableList >
      <ListItem
        primaryText="Get Started"
        primaryTogglesNestedList={true}
        nestedItems={[
          <ListItem primaryText="Required Knowledge" value="/get-started/required-knowledge" />,
          <ListItem primaryText="Installation" value="/get-started/installation" />,
          <ListItem primaryText="Usage" value="/get-started/usage" />,
          <ListItem primaryText="Server Rendering" value="/get-started/server-rendering" />,
          <ListItem primaryText="Examples" value="/get-started/examples" />,
        ]}
      />
    </SelectableList>
    <Divider />
    <SelectableList
      value=""
      onChange={this.handleRequestChangeLink}
    >
      <Subheader>Resources</Subheader>
      <ListItem primaryText="GitHub" value="https://github.com/callemall/material-ui" />
      <ListItem primaryText="React" value="http://facebook.github.io/react" />
      <ListItem
        primaryText="Material Design"
        value="https://www.google.com/design/spec/material-design/introduction.html"
      />
    </SelectableList>
  </Drawer>
));
