export default function friendsRow(
  name: string,
  occupation: string,
  imgSrc: string
) {
  return `
        <div id="friend_single_city1_${name.toLowerCase()}" class="friend_single">
          <h3>${name}</h3>
          <p>${occupation}</p>
          <div id="friend_single_info" class="friend_single_info">
            <span>
              <img src="${imgSrc}" alt="${name}" class="npc_image" />
            </span>
            <span>
              <h4>Friendship</h4>
              <span class="friend_stats">
                <span>
                  <span class="friendship_meter" id="${name.toLowerCase()}_friendship_meter">
                  </span>
                </span>
              </span>
            </span>
          </div>
        </div>
`;
}
