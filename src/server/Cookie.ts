const COOK_fs = require('fs');
const COOK_path = require('path');

const COOKIE_LOCATION = COOK_path.join(__dirname, "/Baked");

function UpdateCookies(cookie) {
    // read old cookies
    var oldCookie = GetCookies();

    var newCookie = {...oldCookie, ...cookie};

    // save new cookies
    COOK_fs.writeFileSync(COOKIE_LOCATION, JSON.stringify(newCookie));
}

function GetCookies(): any {
    try {
        return JSON.parse(COOK_fs.readFileSync(COOKIE_LOCATION, 'utf8'));
    } catch (err) {
        console.log(err);
        COOK_fs.writeFileSync(COOKIE_LOCATION, JSON.stringify({}));
        return null;
    }
}

module.exports = {
    UpdateCookies: UpdateCookies,
    GetCookies: GetCookies
}