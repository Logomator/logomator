import { connect } from 'react-redux';
import LogoList from '../components/LogoList';

const mapStateToProps = (state) => ({
    companyName: state.companyName,
    tagLine: state.tagLine,
    icons: state.icons
});

const GenerateLogos = connect(
    mapStateToProps,
)(LogoList);

export default GenerateLogos;
