import { fetchFriendData } from '../../../../api/client';
import { CITY1_FRIENDS } from '../../../../constants';
import friendshipMeter from '../friendshipMeter';

export default function city1RowsFriendshipMeter() {
  // populate friend data from api
  const andrew_friendship_meter = document.getElementById(
    'andrew_friendship_meter'
  )!;
  const catherine_friendship_meter = document.getElementById(
    'catherine_friendship_meter'
  )!;
  const jibblet_friendship_meter = document.getElementById(
    'jibblet_friendship_meter'
  )!;
  const jonathan_friendship_meter = document.getElementById(
    'jonathan_friendship_meter'
  )!;
  const jt_friendship_meter = document.getElementById('jt_friendship_meter')!;
  const karath_friendship_meter = document.getElementById(
    'karath_friendship_meter'
  )!;
  const matty_friendship_meter = document.getElementById(
    'matty_friendship_meter'
  )!;
  const moses_friendship_meter = document.getElementById(
    'moses_friendship_meter'
  )!;
  const nektarios_friendship_meter = document.getElementById(
    'nektarios_friendship_meter'
  )!;
  const newberry_friendship_meter = document.getElementById(
    'newberry_friendship_meter'
  )!;
  const orpheus_friendship_meter = document.getElementById(
    'orpheus_friendship_meter'
  )!;
  const ryan_friendship_meter = document.getElementById(
    'ryan_friendship_meter'
  )!;
  const tanner_friendship_meter = document.getElementById(
    'tanner_friendship_meter'
  )!;
  const tsubaki_friendship_meter = document.getElementById(
    'tsubaki_friendship_meter'
  )!;
  const tsuki_friendship_meter = document.getElementById(
    'tsuki_friendship_meter'
  )!;
  const victor_friendship_meter = document.getElementById(
    'victor_friendship_meter'
  )!;

  // add real data to empty divs
  fetchFriendData(CITY1_FRIENDS.ANDREW).then((res) => {
    andrew_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.CATHERINE).then((res) => {
    catherine_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.JIBBLET).then((res) => {
    jibblet_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.JONATHAN).then((res) => {
    jonathan_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.JT).then((res) => {
    jt_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.KARATH).then((res) => {
    karath_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.MATTY).then((res) => {
    matty_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.MOSES).then((res) => {
    moses_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.NEKTARIOS).then((res) => {
    nektarios_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.NEWBERRY).then((res) => {
    newberry_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.ORPHEUS).then((res) => {
    orpheus_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.RYAN).then((res) => {
    ryan_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.TANNER).then((res) => {
    tanner_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.TSUBAKI).then((res) => {
    tsubaki_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.TSUKI).then((res) => {
    tsuki_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
  fetchFriendData(CITY1_FRIENDS.VICTOR).then((res) => {
    victor_friendship_meter.innerHTML = friendshipMeter(res.friendshipMeter);
  });
}
