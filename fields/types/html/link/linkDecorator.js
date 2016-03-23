import React from 'react';
import { Entity } from 'draft-js';
import CONSTANT from './CONSTANT';

const styles = {
    link: {
        color: '#3b5998',
        textDecoration: 'underline',
    }
};

const Link = (props) => {
    const {url} = Entity.get(props.entityKey).getData();
    return (
        <a href={url} style={styles.link}>
            {props.children}
        </a>
    );
};

function findLinkEntities(contentBlock, callback) {
    contentBlock.findEntityRanges(
        (character) => {
            const entityKey = character.getEntity();
            return (
                entityKey !== null &&
                    Entity.get(entityKey).getType() === CONSTANT.link
            );
        },
        callback
    );
}

export default { strategy: findEntityRanges, component: Link };
