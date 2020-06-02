import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components'
import React from 'react';

const ADDON_ID = 'badges_addon';
const PARAM_KEY = 'badges';
const PANEL_ID = `${ ADDON_ID }/panel`;

const MyPanel = () => {
    /** @type {BadgeConfig | null} */
    const value = useParameter(PARAM_KEY, null);
    if (!value) {
        return null;
    }

    const available_badges = value.icons;
    return (<div>
        <h2>Badges</h2>
        { value.badges && value.badges.map((badge, index) => (<img
            key={ badge }
            width={ value.icon_size }
            height={ value.icon_size }
            alt={ available_badges[badge].text }
            title={ available_badges[badge].text }
            src={ available_badges[badge].icon }/>)) }
    </div>);
}

addons.register(ADDON_ID, api => {
    const render = ({ active, key }) => (
        <AddonPanel active={ active }
            key={ key }>
            <MyPanel/>
        </AddonPanel>
    );
    const title = 'Badges';

    addons.add(PANEL_ID, {
        type: types.PANEL,
        title,
        render,
        paramKey: PARAM_KEY,
    });
});
