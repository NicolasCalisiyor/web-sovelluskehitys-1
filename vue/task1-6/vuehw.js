
new Vue({
    el: "#hello-world-app",
    data: {
        msg: "Hello World!"
    },
    computed: {
        countChars: function () {
            return this.msg.replace(/\s+/g,'').length
        }
    }
});