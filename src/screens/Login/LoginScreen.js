import React, { Component, Fragment } from "react";
import { View, Text, Dimensions, TextInput, StyleSheet, Alert, ImageBackground } from "react-native";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import * as yup from 'yup'
import { Formik } from 'formik'

export default class LoginScreen extends Component {

    render() {
        return (
            <ImageBackground source={require('../../../assets/background.jpg')} style={styles.backgroundImage}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => {     
                        if(values.email=="abc@gmail.com" && values.password == '1234567'){
                            Alert.alert("Successfully Logged IN")
                            this.props.navigation.navigate('Display');
                        }else{
                            Alert.alert(`try with email: abc@gmail.com and password: 1234567 for validation purpose`);
                        }

                    }}
                    validationSchema={yup.object().shape({
                        email: yup
                            .string()
                            .email('Please Enter Valid Email')
                            .required(),
                        password: yup
                            .string()
                            .min(6)
                            .required(),
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <Fragment>
                            <View style={styles.container}>
                                <View style={styles.inputContainer}>
                                    <Input title="Email"
                                        onChange={handleChange('email')}
                                        value={values.email}
                                        selectionColor='white' />
                                    {touched.email && errors.email &&
                                        <Text style={{ fontSize: 15, color: 'red' }}>{errors.email}</Text>
                                    }

                                    <Input title="Password"
                                        onChange={handleChange('password')}
                                        value={values.password}
                                        secure={true}
                                        selectionColor='white' />

                                    {touched.password && errors.password &&
                                        <Text style={{ fontSize: 15, color: 'red' }}>{errors.password}</Text>
                                    }
                                </View>
                                <View style={styles.buttonContainer}>
                                    <Button title="submit" color="#e92e6e" onPress={handleSubmit} />
                                </View>
                            </View>
                        </Fragment>
                    )}
                </Formik>
            </ImageBackground>

        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    backgroundImage:{
        flex:1
    }
})