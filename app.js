const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const locale = process.argv[2]

if (!locale) {
    return console.log('Adress not provided.')
}

geocode(locale, (error, { latitude, longitude, location }) => {
    if (error) {
        return console.log('Error', error)
    } 
    
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error)
        }

        console.log(location)
        console.log(forecastData)
    })
})

