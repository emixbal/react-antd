import { connect } from 'react-redux'
import App from './component'
import {
    handleChangeLoading,
} from './actions'


const mapStateToProps = (state) => ({
    ...state.home,
})

const mapDispatchToProps = {
    handleChangeLoading
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)