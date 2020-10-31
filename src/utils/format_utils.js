export const getCount = (count) => {
  if (count < 0) {
    return;
  } else if (count < 10000) {
    return count;
  } else if (count / 10000 < 10000) {
    return Math.floor(count % 1000) / 10 + '万';
  } else {
    return Math.floor(count % 10000000) / 10 + '亿';
  }
};
export const getSizeImage = (url, size) => {
  return `${url}?param=${size}y${size}`;
};

export const formatDate = (time, fmt) => {
  const date = new Date(time);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  const obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  };
  for (let key in obj) {
    if (new RegExp(`(${key})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (obj[key] + '').padStart(2, '0'));
    }
  }
  return fmt;
};

export function getPlaySong(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
