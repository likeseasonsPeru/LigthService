export function formatter(num) {
  const formatterSoles = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
  });
  return formatterSoles.format(num);
}
