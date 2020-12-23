let available = true

function showMessage(){
  console.log("Hello!")
}

function exec(){
  if(available) showMessage()

  //short circuit conditional
  available && showMessage()
}

exec()
