import React from 'react';
import { View, ScrollView } from 'react-native';

//styles
import styles from './styles';

//headerPage
import PageHeader from '../../components/PageHeader';

import Teacheritem from '../../components/TeacherItem';

function Favorites() {
    return (
        <View style={styles.container}> 
            <PageHeader title="Meus proffys favoritos"/>
        
            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}>
                <Teacheritem />
                <Teacheritem />
                <Teacheritem />

            </ScrollView>
        </View>

    )
}

export default Favorites; 