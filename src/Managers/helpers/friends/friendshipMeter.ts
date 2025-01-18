export default function friendshipMeter(friendship: number) {
  switch (friendship) {
    case 0:
      return `
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
            `;
    case 1:
      return `
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
            `;
    case 2:
      return `
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
            `;
    case 3:
      return `
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
            `;
    case 4:
      return `
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart_empty.png" alt="Friendship Meter" />
            `;
    case 5:
      return `
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
              <img src="/images/items/heart.png" alt="Friendship Meter" />
            `;
    default:
      return '';
  }
}
