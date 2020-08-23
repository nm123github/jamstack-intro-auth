
import React, {useEffect, useState} from 'react';
import {navigate} from 'gatsby';
import {Router} from '@reach/router';
import IdentityModal from 'react-netlify-identity-widget';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import RouteLogin from '../components/route-login';

import 'react-netlify-identity-widget/styles.css';

const Dashboard = ({location}) => {
  const [isVisible, setVisibility] = useState(false);
  const showModal = () => setVisibility(true);

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      console.log('matched')
      navigate('/dashboard/login', {replace: true});
    }
  }, [location.pathname]);

  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <RouteLogin showModal={showModal} path="/dashboard/login" />
      </Router>
      <IdentityModal
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
      <p>TODO: Create a dashboard</p>
    </Layout>
  )
}

export default Dashboard;
