import { connect } from 'react-redux'
import App from './component'
import {
    handleChangeLoading, handleGetUsers,
} from './actions'


const mapStateToProps = (state) => ({
    ...state.home,
})

const mapDispatchToProps = {
    handleChangeLoading, handleGetUsers
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)