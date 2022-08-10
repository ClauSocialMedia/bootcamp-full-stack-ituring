function converterCorPraRgb(cor) {

  switch (cor) {
    case "vermelho":
      console.log("rgb(255,0,0)");
      break;
    case 'laranja':
      console.log("rgb(255,128,0)");
      break;
    case "amarelo":
      console.log("rgb(255,255,0)");
      break;
    case 'verde':
      console.log("rgb(,255,)");
      break;
    case "azukClaro":
      console.log("rgb(0,255,255)");
      break;
    case 'azulMarinho':
      console.log("rgb(0,0,255)");
      break;
    case 'rosa':
      console.log("rgb(255,0,255)");
    default: 
      console.log('rgb(255,255,255)');
  }
  }

  converterCorPraRgb("vermelho")
  converterCorPraRgb("laranja")
  converterCorPraRgb("amarelo")
  converterCorPraRgb("verde")
  converterCorPraRgb("azulClaro")
  converterCorPraRgb("azulMarinho")
  converterCorPraRgb("rosa")
