import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

import '../Styles/Global.css';

function SocialMedia(props) {
    const { color } = props;

    return (
        <div>
            <div>
                 <SocialIconlink color={color} bgColor="transparent" fgColor={color} style={{ fontsize: "14px" }} url="https://twitter.com/PicsouRoberto" />
                <SocialIconlink color={color} bgColor="transparent" fgColor={color} url="https://facebook.com/roberto.phanord" />
                <SocialIconlink color={color} bgColor="transparent" fgColor={color} class="bg-red-800" url="https://instagram.com/iampicsou" />
            </div>
        </div>
    )
}

const SocialIconlink = styled(SocialIcon) `
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-right: 12px;
    font-size: 15px;
`;

export default SocialMedia;