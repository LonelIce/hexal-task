let portfolio_img = [];
function importAll(r) {
    r.keys().forEach((s, i, arr) => portfolio_img[i] = r(s));
}
importAll(require.context('./assets/img/portfolio/', true, /\.svg$/));

console.log(portfolio_img)






