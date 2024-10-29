import {ImageSourcePropType, StyleSheet} from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        //padding: 20,

    },
    titleText: {
        justifyContent: 'center',
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333',
    },
    paragraph:{
        fontFamily: 'nunito-regular',
        marginVertical: 8,
        lineHeight: 20,
    },
    header: {
        flex: 1,
        width: 1400,  
        height: '100%',       
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'flex-start',  
      },
      
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'green',
        letterSpacing: 1.5,
        
    },
    icon: {
        position: 'absolute',
        left: 16,
        
    },
    rating: {
        padding: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerImage: {
        width: 20,
        height: 20,
        marginHorizontal: 10,
    },
    headerTitle: {
        flexDirection: 'row',
    },
    input: {
        marginBottom: 5,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 5,
        borderBottomColor: '#ddd',
        fontFamily: 'nunito-regular'
    },
});

// export const images = {
//     ratings: {
//         '1': require('../../assets/images/rating-1.png'),
//         '2': require('../../assets/images/rating-2.png'),
//         '3': require('../../assets/images/rating-3.png'),
//         '4': require('../../assets/images/rating-4.png'),
//         '5': require('../../assets/images/rating-5.png'),
//     },
//}