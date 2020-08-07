import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import noFavorite from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png'; 

function Teacheritem() {
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{uri: 'https://github.com/diego3g'}} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Gabriel Leite</Text>
                    <Text style={styles.subject}>Matemática</Text>
                </View>
            </View>

            <Text style={styles.bio}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia veniam sit error quia dolores soluta, debitis quibusdam minima culpa, fugiat delectus reiciendis voluptatem tempore molestiae! Magni cumque tempore autem at!</Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora: {'  '} 
                    <Text style={styles.priceValue}>
                        R$ 20,00
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={noFavorite} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        
        </View>
    )
}

export default Teacheritem; 