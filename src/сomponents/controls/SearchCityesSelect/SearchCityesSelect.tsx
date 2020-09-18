import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { Dispatch } from 'redux';
import { MenuItemList } from '../../../theme'
import { Geometry } from '../../../reduser/weatherReduser'
import {Map} from '../../../actions/interfaceActions'
interface SearchSityesPrivate {
  citySearch: Map[]
   setGeometry: (value: Geometry) => Dispatch<any>
}

const SearchSityes:React.FunctionComponent<SearchSityesPrivate> = ({ citySearch }) => {
  // const x = (geometry: any) => {setGeometry(geometry)}
function a(event:React.MouseEvent<HTMLLIElement>):void{
  console.log(event.target)

  // setGeometry(geometry)
}

  if (citySearch.length) {
    return (
      <MenuItemList>
        {citySearch.map((item, index, arr) => {
          return (
            <MenuItem
              key={index}
              value={index}
               onClick={a}
              // onClick={()=>{setGeometry(arr[index].geometry)}}
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
export default SearchSityes
