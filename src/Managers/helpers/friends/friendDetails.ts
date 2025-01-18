import { fetchFriendData } from '../../../api/client';
import friendshipMeter from './friendshipMeter';
import literacyMeter from './literacyMeter';

interface FriendData {
  id: number;
  playerId: number;
  name: string;
  occupation: string;
  friendshipMeter: number;
  literacyMeter: number;
  favoriteBooks: string;
  favoriteGenres: string;
  currentlyReading: string;
  currentlyCheckedOut: string[];
}

export default async function friendDetails(name: string, imgSrc: string) {
  return fetchFriendData(name.toLowerCase()).then((res: FriendData) => {
    console.log(`fetching ${name} details`);
    return `
            <div class="friend_single_details">
              <h3>${res.name}</h3>
              <h5>Occupation: ${res.occupation}</h5>
              <div class="friend_single_info">
                <span>
                  <img src="${imgSrc}" alt="${res.name}" class="npc_image" />
                </span>
                <span class="friend_stats">
                  <span>
                    <h4>Friendship</h4>
                    <span class="friendship_meter">
                      ${friendshipMeter(res.friendshipMeter)}
                    </span>
                  </span>
                  <span>
                    <h4>Literacy</h4>
                    <span class="literacy_meter">
                    ${literacyMeter(res.literacyMeter)}
                    </span>
                  </span>
                </span>
              </div>
                <p><b>Currently Reading:</b> ${res.currentlyReading}
                  <br />
                  <b>Current Books Checked Out:</b> ${res.currentlyCheckedOut
                    .map((b, i) => {
                      if (i === res.currentlyCheckedOut.length - 1)
                        return `${b}`;
                      return `${b}, `;
                    })
                    .join('')}
                </p>
      
                <table>
                  <thead>
                    <td>Favorite Books:</td>
                    <td>Favorite Genres:</td>
                    <td>Activities:</td>
                  </thead>
                  <tbody>
                    <tr>
                    <td>Lord of the Rings: Fellowship of the Ring</td>
                    <td>???</td>
                    <td>Watering Plants</td>
                    </tr>
                    <tr>
                    <td>???</td>
                    <td>???</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>???</td>
                    <td>???</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>???</td>
                    <td></td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>???</td>
                    <td></td>
                    <td></td>
                    </tr>
                  </tbody>
                </table>
            </div>      
`;
  });
}
