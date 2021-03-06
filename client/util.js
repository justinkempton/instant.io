var log = document.querySelector('.log')
var logHeading = document.querySelector('#logHeading')

exports.logAppend = function logAppend (item) {
  logHeading.style.display = 'block'
  if (typeof item === 'string') {
    var p = document.createElement('p')
    p.innerHTML = item
    log.appendChild(p)
  } else {
    log.appendChild(item)
    log.appendChild(document.createElement('br'))
  }
}

// replace the last P in the log
exports.logReplace = function logReplace (str) {
  log.lastChild.innerHTML = str
}

exports.warning = function warning (err) {
  console.error(err.stack || err.message || err)
}

exports.error = function error (err) {
  console.error(err.stack || err.message || err)
  window.alert(err.message || err) //eslint-disable-line
}
