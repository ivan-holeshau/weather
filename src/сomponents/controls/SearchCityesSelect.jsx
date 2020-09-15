import React, { Fragment } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { connect } from 'react-redux'
import { setGeometry } from '../../actions/weatherActions'
import selector from '../../selectors/index'
import { DivRows, Div, MenuItemList } from '../../theme'
function SearchSityes(props) {
  const { citySearch, setGeometry } = props
  return (
    <Fragment>
     
        <MenuItemList>
          {citySearch.map((item, index, arr) => {
            return (
              <MenuItem
                key={index}
                value={index}
                onClick={setGeometry.bind(this, arr[index].geometry)}
              >
                {item.formatted}
              </MenuItem>
            )
          })}
        </MenuItemList>
      
      
    </Fragment>
  )
}

function mapStateToProps(state) {
  console.log('map', state)
  return {
    citySearch: selector.СITYES_SEARCH(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setGeometry: (geometry) => dispatch(setGeometry(geometry)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSityes)
