let weather = 'sunny'
switch (weather) {
  case 'cloudy': 
    console.log('it might be cold') 
    break
  case 'rainy': 
    console.log('you will need a rain coat') 
    break
  case 'sunny': 
    console.log('go out freely') 
    break
  default: 
  console.log('no need for rain coat')
}

let dayUserInput = prompt('what day is today ?') 
let day = dayUserInput.toLowerCase()
switch (day) {
  case 'monday':
    console.log('today is monday')
    break
    case 'tuesday':
      console.log('today is tuesday')
      break
      case 'wednesday':
        console.log('today is wednesday')
        break
        case 'thursday':
          console.log('today is thursday')
          break
          case 'friday':
            console.log('today is friday')
            break
            case 'saturday':
              console.log('today is saturday')
              break
              case 'sunday':
                console.log('today is sunday')
                break
                default:
                console.log('not a day of the week')
}
