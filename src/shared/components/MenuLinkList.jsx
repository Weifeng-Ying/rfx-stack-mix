import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

// components
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';

// stules
const a = cx('db', 'ph3', 'pv3');
const listBlock = cx('list', 'pl0', 'ml0');
const listInline = cx('list', 'pa0', 'mv0');
const liBlock = cx('db');
const liInline = cx('dib');

export default observer(({ inline }) => (
  <List className={inline ? listInline : listBlock}>
    <ListItem className={inline ? liInline : liBlock}><Link className={a} to="/" >Home</Link></ListItem>
    <ListItem
      className={inline ? liInline : liBlock}
    >
      <Link className={a} to="/messages">Messages Demo</Link>
    </ListItem>
    <ListItem className={inline ? liInline : liBlock}><Link className={a} to="/breakpoints">Breakpoints Demo</Link></ListItem>
    <ListItem className={inline ? liInline : liBlock}><Link className={a} to="/fullInfor">fullInfor</Link></ListItem>
  </List>
));
