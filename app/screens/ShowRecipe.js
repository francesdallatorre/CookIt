import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Button, TextInput } from 'react-native';
import { Card, ListItem, Avatar, Icon } from 'react-native-elements'

let baseURL = 'http://localhost:8000';

export default class ShowRecipe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            params: props.navigation.state.params.selectedRecipe,
            recipes: [],
            name: props.navigation.state.params.selectedRecipe.label,
            owner: 'default',
            image: props.navigation.state.params.selectedRecipe.image,
            servings: props.navigation.state.params.selectedRecipe.yield.toString(),
            ingredientOne: props.navigation.state.params.selectedRecipe.ingredientLines[0],
            ingredientTwo: props.navigation.state.params.selectedRecipe.ingredientLines[1],
            ingredientThree: props.navigation.state.params.selectedRecipe.ingredientLines[2],
            ingredientFour: props.navigation.state.params.selectedRecipe.ingredientLines[3],
            ingredientFive: props.navigation.state.params.selectedRecipe.ingredientLines[4],
            ingredientSix: props.navigation.state.params.selectedRecipe.ingredientLines[5],
            ingredientSeven: props.navigation.state.params.selectedRecipe.ingredientLines[6],
            ingredientEight: props.navigation.state.params.selectedRecipe.ingredientLines[7],
            ingredientNine: props.navigation.state.params.selectedRecipe.ingredientLines[8],
            ingredientTen: props.navigation.state.params.selectedRecipe.ingredientLines[9],
            notes: ''

        }

        this.handleAddRecipe = this.handleAddRecipe.bind(this)
    }
    componentDidMount() {
        console.log(this.state.notes)
        this.state.ingredientFour ? this.state.ingredientFour : this.setState({ ingredientFour: '' })
        this.state.ingredientFive ? this.state.ingredientFive : this.setState({ ingredientFive: '' })
        this.state.ingredientSix ? this.state.ingredientSix : this.setState({ ingredientSix: '' })

        this.state.ingredientSeven ? this.state.ingredientSeven : this.setState({ ingredientSeven: '' })
        this.state.ingredientEight ? this.state.ingredientEight : this.setState({ ingredientEight: '' })
        this.state.ingredientNine ? this.state.ingredientNine : this.setState({ ingredientNine: '' })
        this.state.ingredientTen ? this.state.ingredientTen : this.setState({ ingredientTen: '' })

    }
    handleAddRecipe(recipe) {
        const copyRecipes = [...this.state.recipes];
        copyRecipes.unshift(recipe);
        this.setState({
            recipes: copyRecipes,
            // name: "",
            // owner: "",
            // image: "",
            // servings: "",
            // ingredients: "",
            // instructions: ""
        });

    }

    handleSubmit() {
        fetch(baseURL + "/api/v1/recipes/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                name: this.state.name,
                owner: this.state.owner,
                image: this.state.image,
                servings: this.state.servings,
                ingredientOne: this.state.ingredientOne,
                ingredientTwo: this.state.ingredientTwo,
                ingredientThree: this.state.ingredientThree,
                ingredientFour: this.state.ingredientFour,
                ingredientFive: this.state.ingredientFive,
                ingredientSix: this.state.ingredientSix,
                ingredientSeven: this.state.ingredientSeven,
                ingredientEight: this.state.ingredientEight,
                ingredientNine: this.state.ingredientNine,
                ingredientTen: this.state.ingredientTen,
                notes: this.state.notes
            })

        })
            .then((res) => res.text())
            .then((resJson) => {
                console.log(resJson);
                this.handleAddRecipe(resJson);
                this.setState({
                    // name: "",
                    // owner: "",
                    // image: "",
                    // servings: "",
                    // ingredients: "",
                    // instructions: ""
                    // notes: ''
                });
            })
            .then(console.log("this then statement"))
            .catch((error) => console.log({ Error: error }));
        this.props.navigation.navigate('MyRecipes')
    }

    render() {
        return (

            <ScrollView>

                <Card>
                    <View style={styles.container}>
                        <Card.Title style={styles.title}>{this.state.params.label}</Card.Title>
                        <Image style={styles.image}
                            source={{ uri: this.state.params.image }} />
                        {/* Like Icon with handleSubmit function*/}
                        <Icon
                            name='heart'
                            type='font-awesome'
                            color='orangered'
                            onPress={() => this.handleSubmit()}
                            style={styles.favorite}
                        />

                        <Card.Title style={styles.label}>Servings: {this.state.params.yield}</Card.Title>
                        {/*  Invisible Form */}
                        <TextInput
                            defaultValue={this.state.name}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.owner}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.image}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.servings}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.ingredientOne}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.ingredientTwo}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.ingredientThree}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.ingredientFour}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.ingredientFive}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.ingredientSix}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.ingredientSeven}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.ingredientEight}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.ingredientNine}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.ingredientTen}
                            style={styles.hide}
                        />
                        <TextInput
                            defaultValue={this.state.notes}
                            style={styles.hide}
                        />
                        {/*  End  of Invisible Form*/}
                        <View style={styles.ingredients}>
                            <Card.Title>Shopping List</Card.Title>
                            <Card.Divider />
                            {
                                this.state.params.ingredients.map(ingredient => {
                                    return (
                                        <ListItem bottomDivider>
                                            <Avatar rounded source={
                                                { uri: ingredient.image }
                                            } />
                                            <ListItem.Content>
                                                <ListItem.Title>
                                                    {ingredient.text}
                                                </ListItem.Title>
                                                <ListItem.Title style={styles.aisle}>
                                                    {ingredient.foodCategory}
                                                </ListItem.Title>
                                            </ListItem.Content>
                                        </ListItem>
                                    )
                                })
                            }
                        </View>

                    </View>
                </Card>
            </ScrollView >


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20

    },
    nav: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginLeft: 290,
        padding: 5,
        marginTop: 10
    },
    title: {
        textAlign: 'center'
    },
    label: {
        textAlign: 'center',
        marginTop: 7
    },
    image: {
        height: 300,
        width: 300,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: 20,
    },
    favorite: {
        alignSelf: 'center',
        padding: 5,
        height: 35


    },
    ingredients: {


    },
    ingredientsList: {
        textAlign: 'center',
        height: 50,


    },
    aisle: {

        color: 'green',
        fontSize: 15
    },
    hide: {
        display: 'none'
    }

})


