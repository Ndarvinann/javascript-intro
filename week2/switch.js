const prompt = require("prompt-sync")({sigint:true})
let produce = prompt("Enter the produce name(Beans, maize,cowpeas, gnuts, soybeans):"   );
//convert all input to lowercase to solve case sensitivity.
produce =  produce.toLowerCase();
switch(produce)
{
  case "beans":
    console.log(`category : Legumes`)
    break;
    case "Maize":
      console.log(`category: Grains`)
      break;
      case "cow peas":
      console.log(`category: Pulses`)
      break;
      case "g-nuts":
        console.log(`category: nuts`)
        break;
        case "soy beans":
          console.log(`category: proteins`)
          default:
            console.log(`wtf is that?`)
            break;
}
let contact = 2;
switch( contact) {
  case 1:
  console.log(`chocolate`)
  break;
  case 2:
    console.log(`bread`);
    break;
    case 3:
      console.log(`maize`)
      break;
      default:
        console.log(`not available`)
};