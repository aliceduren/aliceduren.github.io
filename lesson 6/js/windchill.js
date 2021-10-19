//t - temp and s= windchill speed
function windchill (t,s) {
    let f=35.74+0.6215 * t - 35.75 *s**0.16 + 0.4275*t*s**0.16
    return f
}

document.getElementById('wind').textContent=Math.round(windchill(60,12));