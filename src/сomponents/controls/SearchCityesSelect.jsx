import React, { Fragment } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import {connect } from 'react-redux'
import { setGeometry } from '../../actions/weatherActions'
import selector from '../../selectors/index'

function SearchSityes (props) {
  const {citySearch,setGeometry} = props
  return (
    <Fragment>
      
      {citySearch.length>0?citySearch.map((item, index, arr) => {
        return (
          <MenuItem
            key={index}
            value={index}
            onClick={setGeometry.bind(this,arr[index].geometry) }
          >
            {item.formatted}
          </MenuItem>
        )
      }): <div></div>}
    </Fragment>
  )
}

function mapStateToProps(state) {
  console.log('map', state)
  return {
    citySearch: selector.weather.СITYES_SEARCH(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setGeometry:geometry=>dispatch(setGeometry(geometry))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchSityes)
