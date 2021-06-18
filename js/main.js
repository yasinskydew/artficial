const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './img/vue/vmSocks-blue.png',
    inStock: false,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
  }
})