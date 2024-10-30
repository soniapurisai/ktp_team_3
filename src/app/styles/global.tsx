import {ImageSourcePropType, StyleSheet} from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#d5d7e6',
    },
    header: {
        flex: 1,
        width: 1400,  
        height: '100%',       
        flexDirection: 'row',  
        alignItems: 'center',  
        justifyContent: 'flex-start',  
      },
      titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 25, 
        color: '#333',
        marginBottom: 20, 
        textAlign: 'center',
    },
    paragraph: {
        fontFamily: 'nunito-bold',
        fontSize: 18, 
        color: '#333',
        textAlign: 'center',
        marginVertical: 20, 
    },
    button: {
        backgroundColor: '#6200EE', 
        padding: 15,
        borderRadius: 30, 
        width: 200,  
        alignItems: 'center', 
        marginBottom: 10, 
    },
    card: { 
        backgroundColor: '#f9f9f9', 
        padding: 20,
        borderRadius: 40, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 10,
        marginVertical: 50, 
        marginHorizontal: 20, 
        alignItems: 'center', 
        width: '50%'
    },
    buttonText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#ffffff', 
        textAlign: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#6200EE',
        letterSpacing: 1.5,
        
    },
});
