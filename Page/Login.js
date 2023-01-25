import React from "react";
import {
    Button,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform, Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import AnimatedInput from "react-native-animated-input";
import {Link} from "@react-navigation/native";

export default function Login({ navigation }) {
    const [email, emailText] = React.useState('');
    const [password, passwordText] = React.useState('');
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
    <View style={styles.page}>
        <Image
            source={require('../assets/LogoYbadges.png')}
            width={125}
            height={166}
            alt='logo'
            style={styles.logo}
        />
        <View style={styles.menulogin}>

                <Text style={styles.textunselect} onPress={() => navigation.navigate('Subscribe')}>INSCRIVEZ-VOUS</Text>
            <Text style={styles.textselect}>SE CONNECTER</Text>
        </View>
        <View style={styles.formlogin}>
            <View style={{ justifyContent: "center", width:'80%',}}>
                <AnimatedInput
                    placeholder="Email"
                    errorText="Error"
                    valid={true}
                    onChangeText={emailText}
                    value={email}
                    styleInput={{color:'#fff', fontSize:17, height:20}}
                    styleLabel={{ color:'#fff'}}
                    labelInitialSize={17}
                    labelFinalSize={10}
                    styleBodyContent={{ borderBottomWidth: 0, borderBottomColor: '#fff', }}
                />
            </View>
            <View style={{ justifyContent: "center", width:'80%',}}>
                <AnimatedInput
                    placeholder="Password"
                    errorText="Error"
                    valid={true}
                    onChangeText={passwordText}
                    value={password}
                    styleInput={{color:'#fff', fontSize:17, height:20}}
                    styleLabel={{ color:'#fff'}}
                    labelInitialSize={17}
                    labelFinalSize={10}
                    styleBodyContent={{ borderBottomWidth: 0, borderBottomColor: '#fff', }}
                />
            </View>
        </View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('BadgesPage')}>
            <Text style={styles.text}>CONNECTION</Text>
        </Pressable>

    </View>
        </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131313',
        justifyContent:'center'
    },
    page: {
        width: '100%',
        alignItems:'center',
    },
    logo: {
        width: 250,
        height: 200,
        marginHorizontal:'auto'
    },
    menulogin: {
        flexDirection:'row',
        marginTop: 50,
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:'10%'

    },
    textselect: {
        color:'#fff',
        fontSize:'18%',
        fontWeight:'bold',
        textDecorationLine: "underline",
    },
    textunselect: {
        color:'#fff',
        fontSize:'18%',
    },
    label: {
        position:'absolute',
        color:'#fff',
        fontSize:16,
        paddingTop:10,
        textAlign:'left',
        width:'80%'
    },
    input: {
        color:'#fff',
        height: 40,
        borderWidth: 1,
        width:'80%',
        borderColor:'#131313',

    },

    formlogin: {
        width:'100%',
        alignItems:'center',
        marginTop: 10,
        marginBottom: 10,
        justifyContent:'center',
    },
    LoginButton:{
        color:'#fff'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 62,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: '#131313',
        borderWidth: 1,
        borderColor:'#fff'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

});
