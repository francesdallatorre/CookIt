import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, View, Button } from 'react-native';
import { Card, ListItem, Input } from 'react-native-elements'

let baseURL = 'http://localhost:8000';

export default class ShowMyRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            params: props.navigation.state.params.recipe,
            recipes: props.navigation.state.params.recipes,
            ingredients: [props.navigation.state.params.recipe.ingredientOne, props.navigation.state.params.recipe.ingredientTwo, props.navigation.state.params.recipe.ingredientThree, props.navigation.state.params.recipe.ingredientFour, props.navigation.state.params.recipe.ingredientFive, props.navigation.state.params.recipe.ingredientSix, props.navigation.state.params.recipe.ingredientSeven, props.navigation.state.params.recipe.ingredientEight, props.navigation.state.params.recipe.ingredientNine, props.navigation.state.params.recipe.ingredientTen],
            id: props.navigation.state.params.recipe.id,
            notes: props.navigation.state.params.recipe.notes
        }

    }


    handleAddRecipe(recipe) {
        const copyRecipes = [...this.state.recipes];
        copyRecipes.unshift(recipe);
        this.setState({
            recipes: copyRecipes,
        });

    }

    handleSubmit() {
        id = this.state.id;
        fetch(baseURL + "/api/v1/recipes/" + id, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                notes: this.state.notes
            })
        })
            .then((res) => res.text())
            .then((resJson) => {
                this.handleAddRecipe(resJson);
                console.log(resJson)
            })
            .catch((error) => console.log({ Error: error }));
        console.log("submit");
        this.props.navigation.navigate('Home')

    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <Card.Title>{this.state.params.name}</Card.Title>
                    <Card.Divider />
                    <Image
                        style={styles.image}
                        source={{ uri: this.state.params.image }}

                    />
                    <Card.Title>Servings: {this.state.params.servings}</Card.Title>
                    <Card.Title>Ingredients</Card.Title>
                    <Card.Divider />

                    {
                        this.state.ingredients.map(ingredient => {
                            if (ingredient !== '') {
                                return (
                                    <ListItem bottomDivider>
                                        <ListItem.Content>
                                            <ListItem.Title>{ingredient}</ListItem.Title>
                                        </ListItem.Content>
                                    </ListItem>
                                )
                            }
                        })
                    }
                    <View style={styles.notes}>
                        <ListItem.Title >Notes:</ListItem.Title>
                        <Input
                            defaultValue={this.state.notes}
                            onChangeText={value => this.setState({ notes: value })}
                            style={styles.input}
                        />
                        <Button title="add note" onPress={() => { this.handleSubmit() }} />
                    </View>


                </Card>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,
    },
    notes: {
        margin: 15,
        padding: 20,
        height: 200,
        backgroundColor: 'lightyellow',

    },
    input: {



    }

})