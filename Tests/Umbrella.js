var umbrella = {
    color: "pink",
    isOpen: false,
    open: function () {
        if (isOpen) {
            console.log("The umbrella is already open!");
        } else {
            isOpen = true;
            console.log("The umbrella has been opened!");
        }
    },

    close: function () {
        if (isOpen) {
            isOpen = false;
            console.log("The umbrella has been closed!");
        } else {
            console.log("The umbrella is already closed!");
        }
    }
};