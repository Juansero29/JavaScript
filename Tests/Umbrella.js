var umbrella = {
    color: "pink",
    isOpen: false,
    open: function () {
        if (this.isOpen) {
            console.log("The umbrella is already open!");
        } else {
            this.isOpen = true;
            console.log("The umbrella has been opened!");
        }
    },

    close: function () {
        if (this.isOpen) {
            this.isOpen = false;
            console.log("The umbrella has been closed!");
        } else {
            console.log("The umbrella is already closed!");
        }
    }
};