import React from "react";

type friendsProps = {
    name: string
    src:string
}

export const FriendSideItem = (props:friendsProps) => {
    return (
        <div>
            <img src={props.src} width="50" />
            <p>{props.name}</p>
        </div>
    )

}