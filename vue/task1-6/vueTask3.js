new Vue({
    el: "#counter",
    data: {
        count: 0
    },
    methods: {
        plusCounter: function () {
            this.count += 1;
        },
        minusCounter: function () {
            this.count -= 1;
        },
        resetCounter: function () {
            this.count = 0;
        }

    }
});