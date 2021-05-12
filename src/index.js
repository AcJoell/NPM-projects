const names = ["Joel", "Camilo", "Paula", "Juan", "Sebastian", "Wendhi", "Samuel", "Felipe", "Natalia"];

const randomMessage = () => {
  // Math.floor regresa primer valor redondeado
  const message = names[Math.floor(Math.random() * names.length)];
  console.log(message);
};

module.exports = { randomMessage };
