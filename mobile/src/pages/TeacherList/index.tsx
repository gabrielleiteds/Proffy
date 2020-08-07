import React from 'react';
import { View, ScrollView } from 'react-native';

//styles
import styles from './styles';

//components
import PageHeader from '../../components/PageHeader'; 
import Teacheritem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <View style={styles.container}> 
            <PageHeader title="Proffys disponíveis"/>

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

export default TeacherList; 