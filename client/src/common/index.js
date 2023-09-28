// Key = name of cookie
// Value = jwt_token
// days = how long until expiry

export const storeCookie = (key, value, days) => {
  let date = new Date();

  days = days || 365;
  // Setting date plus number of days we want cookie to last
  date.setDate(date.getDate() + days);

  let cookie =
    (document.cookie = `${key} = ${value}; expires = ${date.toGMTString()}; path = /`);
  console.log(cookie);
};

export const readCookie = (cookieName) => {
  // pattern to find a cookie)
  const re = new RegExp(`(?<=${cookieName}=)[^;]*`);
  try {
    let cookie = document.cookie.match(re)[0];
    console.log(cookie);
    // try and find a cookie matching
    // the pattern in the regular expression, in this case the cookie name
    // if cookie isn't found, this will raise an error and throw it to the catch block
  } catch (error) {
    return false;
  }
};
