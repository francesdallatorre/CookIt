import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Image, Card, Icon } from 'react-native-elements'

let baseURL = "https://cook-it-backend.herokuapp.com";

export default class MyRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            name: '',
            owner: '',
            image: '',
            servings: '',
            ingredientOne: '',
            ingredientTwo: '',
            ingredientThree: '',
            ingredientFour: '',
            ingredientFive: '',
            ingredientSix: '',
            ingredientSeven: '',
            ingredientEight: '',
            ingredientNine: '',
            ingredientTen: '',
            notes: ''
        }
        this.getRecipes = this.getRecipes.bind(this);

    }
    componentDidMount() {
        this.getRecipes()
    }
    getRecipes() {
        fetch(baseURL + "/api/v1/recipes/")
            .then(
                (data) => {
                    return data.json();
                },
                (err) => console.log(err)
            )
            .then(
                (parsedData) => this.setState({ recipes: parsedData.data }),
                (err) => console.log(err)
            );

    }

    handleDeleteRecipe(e, id) {
        e.preventDefault(); //To Prevent link from clicking and only button
        console.log("delete button");
        console.log(id);

        fetch(baseURL + "/api/v1/recipes/" + id, {
            method: "DELETE",
        }).then((data) => {
            const copyRecipes = [...this.state.recipes];
            const findIndex = this.state.recipes.findIndex((recipe) => recipe._id === id);
            copyRecipes.splice(findIndex, 1);
            this.setState({
                recipes: copyRecipes,
                recipe: "",
            });
            this.componentDidMount()
        });
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.nav}>
                    <Card.Title style={styles.text} onPress={() => this.props.navigation.navigate('Home')}> Home </Card.Title>
                </View>
                <View style={styles.container}>
                    {
                        this.state.recipes.map(recipe => {
                            return (
                                <TouchableOpacity style={styles.recipes} onPress={() => { this.props.navigation.navigate('ShowMyRecipe', { recipe: recipe, recipes: this.state.recipes }) }}>
                                    <Text style={styles.name}>{recipe.name}</Text>
                                    <Image source={{ uri: recipe.image }} style={styles.image} />
                                    <Icon
                                        name='delete'
                                        color='#517fa4'
                                        onPress={(e) => this.handleDeleteRecipe(e, recipe.id)}
                                        style={styles.icon}
                                    />
                                </TouchableOpacity>

                            )

                        })
                    }
                </View>

            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    nav: {
        alignItems: 'flex-end',
        padding: 5,
        backgroundColor: '#eee',

    },
    text: {
        fontSize: 15,
        padding: 10
    },
    recipes: {
        height: 250,
        width: 190,
        margin: 5,
        borderWidth: 0.5,
        borderColor: 'grey'


    },
    name: {
        height: 40,
        textAlign: 'center',
        marginTop: 10,



    },
    image: {
        height: 160,
        width: 160,
        marginLeft: 12,
        borderRadius: 10
    },
    icon: {
        padding: 10
    }
})