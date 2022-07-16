const COOK_fs = require('fs');
const COOK_path = require('path');

const COOKIE_LOCATION = COOK_path.joint(__dirname, "/Baked");

function UpdateCookies(cookie) {
    // read old cookies
    var oldCookie = GetCookies();

    var newCookie = {...oldCookie, ...cookie};

    // save new cookies
    COOK_fs.writeFileSync(COOKIE_LOCATION, JSON.stringify(newCookie));
}

function GetCookies(): any {
    return JSON.parse(COOK_fs.readFileSync(COOKIE_LOCATION, 'utf8'));
}

module.exports = {
    UpdateCookies: UpdateCookies,
    GetCookies: GetCookies
}