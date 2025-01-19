import { CITY1_FRIENDS } from '../../../../constants';
import friendDetails from '../friendDetails';
import hideFriendRows from '../hideFriendRows';

export default function city1Details() {
  /*
    Grab all NPC info divs to fill if Player clicks on NPC row
  */
  const see_all_friends = document.getElementById('see_all_friends')!;
  const friend_single_city1_andrew_info = document.getElementById(
    'friend_single_city1_andrew_info'
  )!;
  const friend_single_city1_catherine_info = document.getElementById(
    'friend_single_city1_catherine_info'
  )!;
  const friend_single_city1_jibblet_info = document.getElementById(
    'friend_single_city1_jibblet_info'
  )!;
  const friend_single_city1_jonathan_info = document.getElementById(
    'friend_single_city1_jonathan_info'
  )!;
  const friend_single_city1_jt_info = document.getElementById(
    'friend_single_city1_jt_info'
  )!;
  const friend_single_city1_karath_info = document.getElementById(
    'friend_single_city1_karath_info'
  )!;
  const friend_single_city1_matty_info = document.getElementById(
    'friend_single_city1_matty_info'
  )!;
  const friend_single_city1_moses_info = document.getElementById(
    'friend_single_city1_moses_info'
  )!;
  const friend_single_city1_nektarios_info = document.getElementById(
    'friend_single_city1_nektarios_info'
  )!;
  const friend_single_city1_newberry_info = document.getElementById(
    'friend_single_city1_newberry_info'
  )!;
  const friend_single_city1_orpheus_info = document.getElementById(
    'friend_single_city1_orpheus_info'
  )!;
  const friend_single_city1_ryan_info = document.getElementById(
    'friend_single_city1_ryan_info'
  )!;
  const friend_single_city1_tanner_info = document.getElementById(
    'friend_single_city1_tanner_info'
  )!;
  const friend_single_city1_tsubaki_info = document.getElementById(
    'friend_single_city1_tsubaki_info'
  )!;
  const friend_single_city1_tsuki_info = document.getElementById(
    'friend_single_city1_tsuki_info'
  )!;
  const friend_single_city1_victor_info = document.getElementById(
    'friend_single_city1_victor_info'
  )!;

  const friend_single_city1_andrew = document.getElementById(
    'friend_single_city1_andrew'
  )!;
  const friend_single_city1_catherine = document.getElementById(
    'friend_single_city1_catherine'
  )!;
  const friend_single_city1_jibblet = document.getElementById(
    'friend_single_city1_jibblet'
  )!;
  const friend_single_city1_jonathan = document.getElementById(
    'friend_single_city1_jonathan'
  )!;
  const friend_single_city1_jt = document.getElementById(
    'friend_single_city1_jt'
  )!;
  const friend_single_city1_karath = document.getElementById(
    'friend_single_city1_karath'
  )!;
  const friend_single_city1_matty = document.getElementById(
    'friend_single_city1_matty'
  )!;
  const friend_single_city1_moses = document.getElementById(
    'friend_single_city1_moses'
  )!;
  const friend_single_city1_nektarios = document.getElementById(
    'friend_single_city1_nektarios'
  )!;
  const friend_single_city1_newberry = document.getElementById(
    'friend_single_city1_newberry'
  )!;
  const friend_single_city1_orpheus = document.getElementById(
    'friend_single_city1_orpheus'
  )!;
  const friend_single_city1_ryan = document.getElementById(
    'friend_single_city1_ryan'
  )!;
  const friend_single_city1_tanner = document.getElementById(
    'friend_single_city1_tanner'
  )!;
  const friend_single_city1_tsubaki = document.getElementById(
    'friend_single_city1_tsubaki'
  )!;
  const friend_single_city1_tsuki = document.getElementById(
    'friend_single_city1_tsuki'
  )!;
  const friend_single_city1_victor = document.getElementById(
    'friend_single_city1_victor'
  )!;

  // hides friend rows and shows single friend details when clicked
  friend_single_city1_andrew.onclick = function () {
    friendDetails(
      CITY1_FRIENDS.ANDREW,
      '/images/npcs/city1/catherine.png'
    ).then((res) => {
      hideFriendRows();
      return (friend_single_city1_andrew_info.innerHTML = res);
    });
  };
  friend_single_city1_catherine.onclick = function () {
    friendDetails(
      CITY1_FRIENDS.CATHERINE,
      '/images/npcs/city1/catherine.png'
    ).then((res) => {
      hideFriendRows();
      return (friend_single_city1_catherine_info.innerHTML = res);
    });
  };
  friend_single_city1_jibblet.onclick = function () {
    friendDetails(
      CITY1_FRIENDS.JIBBLET,
      '/images/npcs/city1/catherine.png'
    ).then((res) => {
      hideFriendRows();
      return (friend_single_city1_jibblet_info.innerHTML = res);
    });
  };
  friend_single_city1_jonathan.onclick = function () {
    friendDetails(
      CITY1_FRIENDS.JONATHAN,
      '/images/npcs/city1/catherine.png'
    ).then((res) => {
      hideFriendRows();
      return (friend_single_city1_jonathan_info.innerHTML = res);
    });
  };
  friend_single_city1_jt.onclick = function () {
    friendDetails(CITY1_FRIENDS.JT, '/images/npcs/city1/catherine.png').then(
      (res) => {
        hideFriendRows();
        return (friend_single_city1_jt_info.innerHTML = res);
      }
    );
  };
  friend_single_city1_karath.onclick = function () {
    friendDetails(
      CITY1_FRIENDS.KARATH,
      '/images/npcs/city1/catherine.png'
    ).then((res) => {
      hideFriendRows();
      return (friend_single_city1_karath_info.innerHTML = res);
    });
  };
  friend_single_city1_matty.onclick = function () {
    friendDetails(CITY1_FRIENDS.MATTY, '/images/npcs/city1/catherine.png').then(
      (res) => {
        hideFriendRows();
        return (friend_single_city1_matty_info.innerHTML = res);
      }
    );
  };
  friend_single_city1_moses.onclick = function () {
    friendDetails(CITY1_FRIENDS.MOSES, '/images/npcs/city1/catherine.png').then(
      (res) => {
        hideFriendRows();
        return (friend_single_city1_moses_info.innerHTML = res);
      }
    );
  };
  friend_single_city1_nektarios.onclick = function () {
    friendDetails(
      CITY1_FRIENDS.NEKTARIOS,
      '/images/npcs/city1/catherine.png'
    ).then((res) => {
      hideFriendRows();
      return (friend_single_city1_nektarios_info.innerHTML = res);
    });
  };
  friend_single_city1_newberry.onclick = function () {
    friendDetails(
      CITY1_FRIENDS.NEWBERRY,
      '/images/npcs/city1/catherine.png'
    ).then((res) => {
      hideFriendRows();
      return (friend_single_city1_newberry_info.innerHTML = res);
    });
  };
  friend_single_city1_orpheus.onclick = function () {
    friendDetails(
      CITY1_FRIENDS.ORPHEUS,
      '/images/npcs/city1/catherine.png'
    ).then((res) => {
      hideFriendRows();
      return (friend_single_city1_orpheus_info.innerHTML = res);
    });
  };
  friend_single_city1_ryan.onclick = function () {
    friendDetails(CITY1_FRIENDS.RYAN, '/images/npcs/city1/catherine.png').then(
      (res) => {
        hideFriendRows();
        return (friend_single_city1_ryan_info.innerHTML = res);
      }
    );
  };
  friend_single_city1_tanner.onclick = function () {
    friendDetails(
      CITY1_FRIENDS.TANNER,
      '/images/npcs/city1/catherine.png'
    ).then((res) => {
      hideFriendRows();
      return (friend_single_city1_tanner_info.innerHTML = res);
    });
  };
  friend_single_city1_tsubaki.onclick = function () {
    friendDetails(
      CITY1_FRIENDS.TSUBAKI,
      '/images/npcs/city1/catherine.png'
    ).then((res) => {
      hideFriendRows();
      return (friend_single_city1_tsubaki_info.innerHTML = res);
    });
  };
  friend_single_city1_tsuki.onclick = function () {
    friendDetails(CITY1_FRIENDS.TSUKI, '/images/npcs/city1/catherine.png').then(
      (res) => {
        hideFriendRows();
        return (friend_single_city1_tsuki_info.innerHTML = res);
      }
    );
  };
  friend_single_city1_victor.onclick = function () {
    friendDetails(
      CITY1_FRIENDS.VICTOR,
      '/images/npcs/city1/catherine.png'
    ).then((res) => {
      hideFriendRows();
      return (friend_single_city1_victor_info.innerHTML = res);
    });
  };

  // hide friend details and show friend rows when clicked
  see_all_friends.onclick = function () {
    see_all_friends.style.display = 'none';
    // display all NPC rows
    friend_single_city1_andrew.style.display = 'block';
    friend_single_city1_catherine.style.display = 'block';
    friend_single_city1_jibblet.style.display = 'block';
    friend_single_city1_jonathan.style.display = 'block';
    friend_single_city1_jt.style.display = 'block';
    friend_single_city1_karath.style.display = 'block';
    friend_single_city1_matty.style.display = 'block';
    friend_single_city1_moses.style.display = 'block';
    friend_single_city1_nektarios.style.display = 'block';
    friend_single_city1_newberry.style.display = 'block';
    friend_single_city1_orpheus.style.display = 'block';
    friend_single_city1_ryan.style.display = 'block';
    friend_single_city1_tanner.style.display = 'block';
    friend_single_city1_tsubaki.style.display = 'block';
    friend_single_city1_tsuki.style.display = 'block';
    friend_single_city1_victor.style.display = 'block';
    // remove NPC info page
    friend_single_city1_andrew_info.innerHTML = ``;
    friend_single_city1_catherine_info.innerHTML = ``;
    friend_single_city1_jibblet_info.innerHTML = ``;
    friend_single_city1_jonathan_info.innerHTML = ``;
    friend_single_city1_jt_info.innerHTML = ``;
    friend_single_city1_karath_info.innerHTML = ``;
    friend_single_city1_matty_info.innerHTML = ``;
    friend_single_city1_moses_info.innerHTML = ``;
    friend_single_city1_nektarios_info.innerHTML = ``;
    friend_single_city1_newberry_info.innerHTML = ``;
    friend_single_city1_orpheus_info.innerHTML = ``;
    friend_single_city1_ryan_info.innerHTML = ``;
    friend_single_city1_tanner_info.innerHTML = ``;
    friend_single_city1_tsubaki_info.innerHTML = ``;
    friend_single_city1_tsuki_info.innerHTML = ``;
    friend_single_city1_victor_info.innerHTML = ``;
  };
}
