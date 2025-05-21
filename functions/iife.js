// imediately invoke Function expression
(function cup(){
    console.log("DB connected");
})();

((name) => {
    console.log(`DB connected two ${name}`);
})("Osama");