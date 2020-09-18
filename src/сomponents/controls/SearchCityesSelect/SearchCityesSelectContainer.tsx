import { connect } from 'react-redux'
import {СITYES_SEARCH} from '../../../selectors/index'
import {State} from '../../../reduser/index'
import {Dispatch } from 'redux';
import SearchSityes from './SearchCityesSelect'
import { Geometry } from '../../../reduser/weatherReduser'
import { setGeometry } from '../../../actions/weatherActions'
function mapStateToProps(state:State) {
    return {
      citySearch: СITYES_SEARCH(state),
    }
  }
  
  function mapDispatchToProps(dispatch:Dispatch) {
    return {
      setGeometry: (geometry:Geometry) => dispatch(setGeometry(geometry)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchSityes)