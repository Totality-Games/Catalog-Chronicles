export default function literacyMeter(literacy: number) {
  switch (literacy) {
    case 0:
      return `
        `;
    case 1:
      return `
          <img src="/images/items/book32.png" alt="Literacy Meter" />
        `;
    case 2:
      return `
          <img src="/images/items/book32.png" alt="Literacy Meter" />
          <img src="/images/items/book32.png" alt="Literacy Meter" />
        `;
    case 3:
      return `
          <img src="/images/items/book32.png" alt="Literacy Meter" />
          <img src="/images/items/book32.png" alt="Literacy Meter" />
          <img src="/images/items/book32.png" alt="Literacy Meter" />
        `;
    case 4:
      return `
          <img src="/images/items/book32.png" alt="Literacy Meter" />
          <img src="/images/items/book32.png" alt="Literacy Meter" />
          <img src="/images/items/book32.png" alt="Literacy Meter" />
          <img src="/images/items/book32.png" alt="Literacy Meter" />
        `;
    case 5:
      return `
          <img src="/images/items/book32.png" alt="Literacy Meter" />
          <img src="/images/items/book32.png" alt="Literacy Meter" />
          <img src="/images/items/book32.png" alt="Literacy Meter" />
          <img src="/images/items/book32.png" alt="Literacy Meter" />
          <img src="/images/items/book32.png" alt="Literacy Meter" />
        `;
    default:
      break;
  }
}
