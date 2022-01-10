import React from "react";
import {FriendSideItem} from "./FriendSideItem/FriendSideItem";

type stateFriends = {
    state:{
        friends:Array<ArrayFriends>
    }
}
type ArrayFriends = {
    id: number
    name: string
    src: string
}

export const FriendsSideBlock = (props:stateFriends) => {

    let friendElements = props.state.friends.map( f => <FriendSideItem key={f.id} name={f.name} src={f.src}/>)

    return (
        <div>
            <h2>Friends</h2>

            {friendElements}

        </div>
    )
}