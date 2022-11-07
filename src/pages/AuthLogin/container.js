import { connect } from 'react-redux'
import App from './component'
import {
    handleChangeLoading,
    handleChangeEmail, handleChangePassword,
    handleLogin,
} from './actions'


const mapStateToProps = (state) => ({
    ...state.authLogin,
})

const mapDispatchToProps = {
    handleChangeLoading,
    handleChangeEmail, handleChangePassword,
    handleLogin,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)