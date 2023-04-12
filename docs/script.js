let randomCbs = {
  number: function (elem) {
    return Math.floor(Math.random()*(Math.pow(10, Number(elem.length))))
  }
}
function scan() {for (let randomElement of document.getElementsByTagName('random[type]')) {
  let rand = new Proxy({}, {
    get: function (nothing, prop) {
      let value = randomElement.getAttribute(prop);
      try {
        value = JSON.parse(value)
      } catch (e) {
        // just treat as string
      }
      return value
    },
    set: function (_, prop, value) {
      if (typeof value !== 'string') {
        value = JSON.stringify(value)
      }
      randomElement.setAttribute(prop);
    },
    deleteProperty(_, prop) {
      randomElement.removeAttribute(prop)
    }
  })
  let cb = randomCbs[rand.type];
  delete rand.type;
  setInterval(()=>{
    randomElement.innerText = cb(rand)
  }, 20)
}
}