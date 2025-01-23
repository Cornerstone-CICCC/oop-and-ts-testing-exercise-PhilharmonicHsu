function counter(number, direction) {
  return new Promise((resolve) => {
    let current = direction === 'increment' ? 0 : number

    function updateCounter() {
      if (direction === 'increment' && current < number) {
        current++
        setTimeout(updateCounter, 1000)
      } else if (direction === 'decrement' && current > 0) {
        current--
        setTimeout(updateCounter, 1000)
      } else {
        resolve(current)
      }
    }

    updateCounter()
  })
}

module.exports = counter