import {Geometry} from '../reduser/weatherReduser'

type rezult = {
    type:string,
    payload?:string|number
}



export type Actions = (value:string|number|boolean|Geometry|Map[], city?:string)=>rezult|Geometry|null|any

export type Map={
  country:string
  formatted:string
  geometry:Geometry
}

  type ParseJsonCityToMap = (response:string,city:string) =>void

