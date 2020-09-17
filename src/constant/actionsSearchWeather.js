// export const SEARCH_WEATHER = 'SEARCH_WEATHER_'
// export const SEARCH_ID_CITY = 'SEARCH_ID_CITY'
// export const SET_ID_CITY = 'SET_ID_CITY'

export const SET_WEATHER_THE_METAWEITHER = 'SET_WEATHER_THE_METAWEITHER'
export const SET_WEATHER_THE_OPENWEATHERMAP = 'SET_WEATHER_THE_OPENWEATHERMAP'
export const INIT = 'INIT'
export const SEARCH_WEATHER_THE_OPENWEATHERMAP =
  'SEARCH_WEATHER_THE_OPENWEATHERMAP'
export const mapCodeMetaweatherToMyWeatherCode = new Map([
  ['0', [113]],
  [
    1,
    [
      176,
      200,
      263,
      266,
      281,
      284,
      293,
      296,
      299,
      302,
      305,
      308,
      311,
      314,
      353,
      356,
      359,
      362,
      365,
      386,
      389,
    ],
  ],
  [2, [116, 119, 122]],
  [
    3,
    [
      182,
      185,
      227,
      230,
      317,
      320,
      323,
      326,
      329,
      332,
      335,
      338,
      350,
      368,
      371,
      374,
      377,
      392,
      395,
    ],
  ],
  [4, [143, 248, 269]],
])
export const mapCodeOpenweatherToMyWeatherCode = new Map([
  [0, [800]],
  [
    1,
    [
      200,
      201,
      202,
      210,
      211,
      212,
      221,
      230,
      231,
      232,
      300,
      301,
      302,
      310,
      311,
      312,
      313,
      314,
      321,
      500,
      501,
      502,
      503,
      504,
      511,
      520,
      521,
      522,
      531,
    ],
  ],
  [2, [801, 802, 803, 804]],
  [3, [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622]],
  [4, [701, 711, 721, 731, 741, 751, 761, 762, 771, 781]],
])

export const nameWeather = ['Cолнечно', 'Дождь', 'Пасмурно', 'Снег', 'Туман']
