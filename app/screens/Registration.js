import React, { Component } from 'react';
import { Button } from 'react-native';
import { Input, Card, Image } from 'react-native-elements'
let baseURL = 'https://cook-it-backend.herokuapp.com';

export default class Registration extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    }
    register() {

        console.log("Submit Button Pressed");
        fetch(baseURL + "/api/v1/users/register", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,

            })

        })
            .then((res) => res.text())
            .then((resJson) => {
                console.log(resJson);
            })
            .then(this.props.navigation.navigate('Login'))
            .then(console.log("this then statement"))
            .catch((error) => console.log({ Error: error }));

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

                    placeholder="username"
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                />
                <Input

                    placeholder="email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <Input

                    placeholder="password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry={true}
                />
                <Button title="register" onPress={() => this.register()}></Button>

            </Card>
        )
    }
}