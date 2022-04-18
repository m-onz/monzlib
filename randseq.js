var inlets = 4

var arr = []
var limit = 16
var max = 10
var restAmount = 80

function getNote () {
  if (Math.random() * 100 > restAmount) {
    return Math.floor(Math.random()*max)
  } else {
    return '-'
  }
}

function bang () {
  arr = []
  for (var i = 0; i < limit; i++) {
    arr.push(getNote());
  }
  outlet(0, arr)
}

function msg_float (num) {
  if (inlet === 1) {
    max = num
  } else if (inlet === 2) {
    restAmount = num
  } else if (inlet === 3) {
    limit = num
  }
}


