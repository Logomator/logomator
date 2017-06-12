import React from 'react';
import DownloadComponent from '../components/DownloadComponent';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { downloadLogo } from '../actions';

const Download = withRouter(({ history, logo, onClick }) => {
  return (
    <div>
      <DownloadComponent history={history} logo={logo} onClick={onClick}/>
    </div>
  );
});

const mapStateToProps = (state) => ({
  logo: state.selectedLogo
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (logo) => {
    dispatch(downloadLogo(logo));
  }
});

const DownloadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Download);

export default DownloadContainer;