import React from 'react';
import { SocialIcon } from 'react-social-icons';

function SocialMedia(props) {
    const { color } = props;

    return (
        <div class="flex space-x-4">
            <SocialIcon color={color} bgColor="transparent" fgColor={color} url="https://twitter.com/PicsouRoberto" />
            <SocialIcon color={color} bgColor="transparent" fgColor={color} url="https://facebook.com/roberto.phanord" />
            <SocialIcon color={color} bgColor="transparent" fgColor={color} class="bg-red-800" url="https://instagram.com/iampicsou" />
        </div>
    )
}

export default SocialMedia;