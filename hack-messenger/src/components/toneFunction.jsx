import React from 'react';

const ToneFunction = props => {
    let documentTones = props.document_tones;
    console.log(documentTones);
    for(let i = 0; i < documentTones.tones.length; i++){
        return documentTones[i].tone_name.toString();
    }

    return(
        <React.Fragment>
            <p>documentTones</p>
        </React.Fragment>
    )
}
export default ToneFunction;