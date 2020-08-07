import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';

//styles
import styles from './styles';

//icons
import {Feather} from '@expo/vector-icons'

//components
import PageHeader from '../../components/PageHeader'; 
import Teacheritem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';
import api from '../../services/api';
import asyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [filtersVisible, setFilters] = useState(false)
    const [favorites, setFavorites] = useState<Number[]>([])
    const [teachers, setTeachers] = useState([])
    const [subject, setSubject]= useState('')
    const [week_day, setWeekDay]= useState('')
    const [time, setTime] = useState('')

    function handleToggleFilters() {
        setFilters(!filtersVisible); 

    }
    function loadFavorites() {
        asyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })
                setFavorites(JSON.parse(favoritedTeachersIds)); 
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites()
    })
    
    async function handleFilterSubmit() {
        loadFavorites(); 
        const response = await api.get('classes', {
            params: {
                subject, week_day, time,
            }
        })

        setFilters(false)
        setTeachers(response.data)
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
                        <TextInput placeholderTextColor="#c1bccc" value={subject} onChangeText={text => setSubject(text)} style={styles.input} placeholder="Qual a matéria?" />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput value={week_day} onChangeText={text => setWeekDay(text)} placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual o dia?"/>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput placeholderTextColor="#c1bccc" value={time} onChangeText={text => setTime(text)} style={styles.input} placeholder="Qual horário?" />
                            </View>
                        </View>

                        <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}> 

                {teachers.map((teacher: Teacher) => {
                    return (
                    <Teacheritem 
                        key={teacher.id} 
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                        />
                    )
                })}

            </ScrollView>
        </View>

        
    )
}

export default TeacherList; 