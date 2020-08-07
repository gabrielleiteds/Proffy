import React from 'react';
import { View } from 'react-native';

//styles
import styles from './styles';

//components
import PageHeader from '../../components/PageHeader'; 
import Teacheritem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <View style={styles.container}> 
            <PageHeader title="Proffys disponíveis"/>

            <Teacheritem />
        </View>

        
    )
}

export default TeacherList; 