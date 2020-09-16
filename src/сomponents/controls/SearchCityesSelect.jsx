import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { connect } from 'react-redux'
import { setGeometry } from '../../actions/weatherActions'
import selector from '../../selectors/index'
import { MenuItemList } from '../../theme'
function SearchSityes (props) {
  const { citySearch, setGeometry } = props
  if (citySearch.length) {
    return (
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
    )
  } else {
    return <div> </div>
  }
}

function mapStateToProps(state) {
  return {
    citySearch: selector.СITYES_SEARCH(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setGeometry: geometry => dispatch(setGeometry(geometry)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSityes)
