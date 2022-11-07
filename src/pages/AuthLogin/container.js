import { connect } from 'react-redux'
import App from './component'
import {
    handleChangeLoading,
} from './actions'


const mapStateToProps = (state) => ({
    ...state.authLogin,
})

const mapDispatchToProps = {
    handleChangeLoading
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)