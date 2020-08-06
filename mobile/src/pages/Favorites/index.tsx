import React from 'react';
import { View } from 'react-native';

//styles
import styles from './styles';

//headerPage
import PageHeader from '../../components/PageHeader';

function Favorites() {
    return (
        <View style={styles.container}> 
            <PageHeader title="Meus proffys favoritos"/>
        </View>
    )
}

export default Favorites; 