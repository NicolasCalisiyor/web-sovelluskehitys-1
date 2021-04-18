((window) => {
    function $(){}
    $.prototype.id = (id) => {
        return document.getElementById(id)
    }
    window.$ = new $;
})(window)