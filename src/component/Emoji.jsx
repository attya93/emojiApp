import React from 'react';
import Entery from './Entery';
import emojipedia from '../emojipedia';

function CreateEntery(emoji) {
    return (<Entery
        id={emoji.id}
        key={emoji.id}
        img={emoji.emoji}
        name={emoji.name}
        defs={emoji.meaning}
    />)
}

function Emoji() {

    return (


        <div>
            <h1>
                <span>emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(CreateEntery)}
            </dl>
        </div>
    );

}

export default Emoji;