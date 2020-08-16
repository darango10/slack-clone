import React from 'react';
import '../styles/sidebarOptions.css'
import {useHistory} from 'react-router-dom'
import db from '../firebase'

const SidebarOptions = ({Icon, title, id, addChannelOption}) => {

    const history = useHistory();

    const addChannel = () => {
        const channelName = prompt('Please enter the chanel name');

        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push(`/${title}`)
        }
    }

    return (
        <div className="sidebarOptions" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOptions__icon"/>}
            {Icon
                ?
                <h3>{title}</h3>
                :
                <h3 className="sidebarOptions__channel">
                    <span className="sidebarOptions__hash"># </span>{title}
                </h3>}
        </div>
    );
};

export default SidebarOptions;
