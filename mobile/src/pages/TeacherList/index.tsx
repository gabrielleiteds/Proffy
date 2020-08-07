import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';

//styles
import styles from './styles';

//icons
import {Feather} from '@expo/vector-icons'

//components
import PageHeader from '../../components/PageHeader'; 
import Teacheritem from '../../components/TeacherItem';
import { BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';

function TeacherList() {
    const [filtersVisible, setFilters] = useState(false)

    function handleToggleFilters() {
        setFilters(!filtersVisible); 

    }

    return (
        <View style={styles.container}> 
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress= {handleToggleFilters}>
                        <Feather name="filter" size= {20} color="#fff" />
                    </BorderlessButton>
                )}
            > 
                {filtersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual a matéria?" />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual o dia?"/>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual horário?" />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

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