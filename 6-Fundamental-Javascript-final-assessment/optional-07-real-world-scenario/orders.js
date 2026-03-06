// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [
  // {
    // id: generateUniqueId(),
    // customerName: "Baji",
    // items: [
    //   {
    //     name: "Karpil",
    //     price: 0,
    //   },
    // ],
    // totalPrice: 0,
    // status:"Menunggu"
  // },
];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: (items.reduce((wadah,nilai) => {
      return wadah + nilai.price;
    },0)),
    status: "Menunggu"
  }
  
  return orders.push(newOrder);

}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const newOrder = orders.find(order => order.id === orderId);
  if (newOrder) {
    newOrder.status = status;
  } else {
    new Error("Waduh error");
  };

}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const totalRevenue = orders.filter((order) => order.status === "Selesai").reduce((wadah,nilai) => {
    return wadah + nilai.totalPrice;
  },0)
  return totalRevenue;
};

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id)
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
