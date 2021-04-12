import React, { Component } from 'react';
import { Button } from 'react-native';
import { Input, Image, Card } from 'react-native-elements';

let baseURL = 'https://cook-it-backend.herokuapp.com';

export default class LogIn extends Component {
    state = {
        email: '',
        password: '',

    }
    login() {

        console.log("Submit Button Pressed");
        fetch(baseURL + "/api/v1/users/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,

            })

        })
            .then((res) => res.json())
            .then((resJson) => {
                console.log(resJson)
                if (!Object.keys(resJson['data']).length) {
                    alert('Wrong username/password. Try again')
                } else {
                    alert('login successful')
                    this.props.navigation.navigate('Home')
                }
            })

            .then(console.log("this then statement"))
            .catch((error) => console.log({ Error: error }))
    }

    render() {

        return (
            <Card>
                <Card.Divider />
                <Image
                    source={require('../assets/food.webp')}
                    style={{ width: 320, height: 300, marginLeft: 20 }}
                />
                <Card.Divider />
                <Input
                    text="email"
                    placeholder="email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}

                />

                <Input
                    text="password"
                    placeholder="password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry={true}

                />
                <Button title="LOGIN" onPress={() => this.login()} />
                <Button title="REGISTER" onPress={() => { this.props.navigation.navigate('Registration') }} />
            </Card>




        )
    }
}


