<template>
    <section>
        <header><h1>My Friends</h1></header>
        <new-friend @add-contact="addContact"></new-friend>
        <ul>
        <friend-contact
            v-for="friend in friends"
            :key="friend.id"
            :id="friend.id"
            :name="friend.name"
            :phone-number="friend.phoneno"
            :email-address="friend.email"
            :is-favourite="friend.isFavourite"
            @toggle-favourite="toggleFavouriteStatus"
            @delete="deleteContact">
        </friend-contact>
        </ul>
    </section>
</template>

<script>
import FriendContact from './FriendContact.vue';
import NewFriend from './NewFriend.vue';
export default {
    components: {
        FriendContact,
        NewFriend
    },
    data(){
        return{
            friends: [
                {
                id: "std1",
                name: "Peter",
                phoneno: "8945677566",
                email: "peter@gmail.com",
                isFavourite: true,
                },
                {
                id: "std2",
                name: "John",
                phoneno: "89412456322",
                email: "john@gmail.com",
                isFavourite: false,
                },
            ],
        }
    },
    methods: {
        toggleFavouriteStatus(friendID){
        const identifiedFriend = this.friends.find(
            friend => friend.id === friendID
        );
        identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
        },
        addContact(name,phone,email){
        const newFriendContact = {
            id: new Date().toISOString(),
            name: name,
            phoneno: phone,
            email: email,
            isFavourite: false
        }
        this.friends.push(newFriendContact);
        },
        deleteContact(friendID){
        this.friends = this.friends.filter((friend) => friend.id!==friendID);
        },
    }
}
</script>
