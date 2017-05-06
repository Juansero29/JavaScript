var facebookProfile={
    name : "Juan",
    friends : 250,
    messages : ["hi", "hello"],

    postMessage : function (message){
        this.messages.push(message);
    },

    deleteMessage : function (index){
        this.messages.splice(index, 1);
    },

    addFriend : function (){
        this.friends++;
    },

    removeFriend : function (){
        this.friends--;
    }
}