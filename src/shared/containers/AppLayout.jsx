import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { inject, observer } from 'mobx-react';
import cx from 'classnames';
import injectTapEventPlugin from 'react-tap-event-plugin';

// dev tools
import isDev from 'isdev';
import DevTools from 'mobx-react-devtools';

// components
import { MatchMediaProvider } from 'mobx-react-matchmedia';
import Snackbar from 'material-ui/Snackbar';
import AppBar from '@/shared/components/mui/AppBar';
import AppNav from '@/shared/components/mui/AppNav';
import AuthModal from '@/shared/components/AuthModal';
// import MenuLinksSX from '@/shared/components/MenuLinksSX';
// import MenuLinksSX from '@/shared/components/MenuLinkList';
// import MenuLinksDX from '@/shared/components/MenuLinksDX';

// forms
import authForm from '@/shared/forms/auth';
import userForm from '@/shared/forms/user';

// styles
import '@/shared/styles/_.global.css';
import styles from '@/shared/styles/AppLayout.css';


injectTapEventPlugin();

@inject('store') @observer
export default class AppLayout extends Component {

  static fetchData() {}

  static propTypes = {
    children: React.PropTypes.node,
    store: React.PropTypes.object,
    // location: React.PropTypes.object,
    // params: React.PropTypes.object,
    // routeParams: React.PropTypes.object,
    // route: React.PropTypes.object,
    // routes: React.PropTypes.array,
  };

  render() {
    const { ui } = this.props.store;
    // const { location, params, routeParams, route, routes } = this.props;

    return (
      <MatchMediaProvider breakpoints={ui.breakpoints} >

        {isDev ? <DevTools position={{ bottom: 0, right: '20px' }} /> : null}
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          titleTemplate="RFX Stack - %s"
          defaultTitle="Default Title"
        />
        <AppBar />
        { /* <AppNav
          open={ui.appNav.isOpen}
          docked={ui.appNav.isDocked}
          accountMenuIsOpen={ui.appBar.accountMenuIsOpen}
        />
*/}
        <AppNav
          open={ui.appNav.isOpen}
          docked={ui.appNav.isDocked}
        />
        <div className={cx({ [styles.su]: ui.layoutIsShifted })}>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
        <Snackbar
          open={ui.snackBar.isOpen}
          message={ui.snackBar.message}
          autoHideDuration={ui.snackBar.duration}
          onRequestClose={() => ui.snackBar.close()}
        />
        <AuthModal
          open={ui.authModal.isOpen}
          showSection={ui.authModal.showSection}
          forms={{
            login     : authForm,
            register  : userForm,
          }}
        />
      </MatchMediaProvider>
    );
  }
}
