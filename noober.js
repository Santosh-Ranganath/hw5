function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE

  // ALL RIDE CODE
  let allRidesButton = document.querySelector('#all-filter')
  allRidesButton.addEventListener('click',  async function(event){
    event.preventDefault()
    document.querySelector(`.rides`).innerHTML = ''

    // console.log('all rides was clicked')
    

    // allRidesButton.insertAdjacentHTML('beforeend', `<h1>All Rides Selected</h1>`)
    
    let response = await fetch(` https://kiei451.com/api/rides.json`)
    let json = await response.json()
    // console.log(json)
    let ridesArray = json

    let ridesDiv = document.querySelector('.rides')
    // console.log(ridesDiv)

    let html = renderRides(ridesArray)
  })

  // PURPLE CODE 
  let purpleButton = document.querySelector('#noober-purple-filter')
  purpleButton.addEventListener('click',  async function(event){
    event.preventDefault()
    document.querySelector(`.rides`).innerHTML = ''

    // console.log('purple was clicked')
    
    
    let response = await fetch(` https://kiei451.com/api/rides.json`)
    let json = await response.json()
    // console.log(json)

    let purpleArray = []

    for (let i=0; i<json.length; i++){
      let purpleRide = json[i]
      levelOfService(purpleRide)
      // console.log(levelOfService(purpleRide))
      if(levelOfService(purpleRide)=='Noober Purple'){
        purpleArray.push(purpleRide)}}

    let ridesDiv = document.querySelector('.rides')

    let html = renderRides(purpleArray)


  })

  // XL CODE 

  let XlButton = document.querySelector('#noober-xl-filter')
  XlButton.addEventListener('click',  async function(event){
    event.preventDefault()
    document.querySelector(`.rides`).innerHTML = ''

    let response = await fetch(` https://kiei451.com/api/rides.json`)
    let json = await response.json()
    // console.log(json)

    let xlArray = []

    for (let i=0; i<json.length; i++){
      let xlRide = json[i]
      levelOfService(xlRide)
      if(levelOfService(xlRide)=='Noober XL'){
        xlArray.push(xlRide)}}

    let ridesDiv = document.querySelector('.rides')

    let html = renderRides(xlArray)


  })

  // POOL CODE
  let poolButton = document.querySelector('#noober-pool-filter')
  poolButton.addEventListener('click',  async function(event){
    event.preventDefault()
    document.querySelector(`.rides`).innerHTML = ''

    let response = await fetch(` https://kiei451.com/api/rides.json`)
    let json = await response.json()
    // console.log(json)

    let poolArray = []

    for (let i=0; i<json.length; i++){
      let poolRide = json[i]
      levelOfService(poolRide)
      if(levelOfService(poolRide)=='Noober Pool'){
        poolArray.push(poolRide)}}

    let ridesDiv = document.querySelector('.rides')

    let html = renderRides(poolArray)


  })

  // X CODE
  let xButton = document.querySelector('#noober-x-filter')
  xButton.addEventListener('click',  async function(event){
    event.preventDefault()
    document.querySelector(`.rides`).innerHTML = ''

    let response = await fetch(` https://kiei451.com/api/rides.json`)
    let json = await response.json()
    // console.log(json)

    let xArray = []

    for (let i=0; i<json.length; i++){
      let xRide = json[i]
      levelOfService(xRide)
      if(levelOfService(xRide)=='Noober X'){
        xArray.push(xRide)}}

    let ridesDiv = document.querySelector('.rides')

    let html = renderRides(xArray)


  })


})

