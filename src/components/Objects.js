class Objects {
  static getCartCount(cart) {
    let count = 0
    cart.forEach((product) => {
      count += product.count
    })
    return count
  }
  static getCartTotal(cart, objectStore) {
    let amount = 0
    cart.forEach((c) => {
      amount += this.getBookById(c.id, objectStore).price * c.count
    })
    return amount
  }
  static getCartView(cart, objectStore) {
    const view = []
    cart.forEach((c) => {
      view.push({ ...this.getBookById(c.id, objectStore), count: c.count })
    })
    return view
  }

  static getObjectById(id, objectStore, returnIndex = false) {
    let index = -1
    objectStore.forEach((b, i) => {
      if (id === b.id) {
        index = i
      }
    })
    return returnIndex ? index : objectStore[index]
  }
  static addToCart(id, cartIn) {
    const cart = [...cartIn]
    const index = this.getBookById(id, cart, true)
    if (index === -1) {
      cart.push({ id: id, count: 1 })
    } else {
      cart[index].count++
    }
    return [...cart]
  }
}

export default Objects
