let num = prompt('enter number')
switch (true) {
  case num > 0:
    console.log('Number is a positive number')
    break
    case num < 0: 
      console.log('Number is a negative number ')
      break
      case num === 0: 
        console.log('Numberis zero')
        break
        default:
        console.log('entered number is not a number')
}