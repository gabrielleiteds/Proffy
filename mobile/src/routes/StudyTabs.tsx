import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//components
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const {Navigator, Screen} = createBottomTabNavigator()

function studyTabs() {
    return(
        <Navigator>
            <Screen name="TeacherList" component={TeacherList}/>
            <Screen name="Favorites" component={Favorites}/>

        </Navigator>
    )
}

export default studyTabs; 