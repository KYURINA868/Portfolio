var vm = new Vue({
    el: '#app',
    data: {
        src: null,
        isShow: false,
        text: "function"
    },
    methods: {
        zoom: function (event) {
            this.src = event.currentTarget.getAttribute('href');
            this.isShow = true;
        },
        close: function () {
            this.isShow = false;
        },
        afterLeave: function () {
            this.src = null;
        },
        zoom1: function () {
            this.text = true;
        },

    }
});
var vm = new Vue({
    el: '#app2',
    data: {
        src: null,
        isShow: false,
        text: "function"
    },
    methods: {
        zoom: function (event) {
            this.src = event.currentTarget.getAttribute('href');
            this.isShow = true;
        },
        close: function () {
            this.isShow = false;
        },
        afterLeave: function () {
            this.src = null;
        },
        zoom1: function () {
            this.text = true;
        },

    }
});
