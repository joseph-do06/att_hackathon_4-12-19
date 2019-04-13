import React from 'react';

const toneFunction = props => {
    let documentTones = props.document_tones.tones;
    console.log(documentTones);
    for(let i = 0; i < documentTones.length; i++){
        return documentTones[i].tone_name;
    }
}