import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements'


export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRecipe: {},
            params: props.navigation.state.params.recipes,

        }
    }
    getSelectedRecipe(recipe) {
        console.log(this.setState.ingredients)
        this.setState({
            selectedRecipe: recipe
        })

        setTimeout(() => {
            this.props.navigation.navigate('Recipe', { selectedRecipe: this.state.selectedRecipe, ingredients: this.state.ingredients })
        }, 500);

    }

    render() {
        return (

            <ScrollView>
                <Card.Divider />
                <View style={styles.nav}>
                    <Card.Title style={styles.navtext} onPress={() => this.props.navigation.navigate('MyRecipes')}> My Recipes</Card.Title>
                </View>

                <View>
                    {
                        this.state.params.map(recipe => {
                            return (
                                <ListItem bottomDivider onPress={() => { this.getSelectedRecipe(recipe.recipe) }}>
                                    <Avatar
                                        rounded
                                        source={{ uri: recipe.recipe.image }}
                                    />
                                    <ListItem.Content>
                                        <ListItem.Title style={styles.recipeText}>{recipe.recipe.label}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            )
                        })
                    }
                </View>
            </ScrollView>



        )
    }
}



const styles = StyleSheet.create({

    nav: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginLeft: 290,
        padding: 5,

    },
    navtext: {
        fontSize: 15
    },
    image: {
        height: 200,
        width: 415
    },
    recipeText: {
        marginLeft: 15
    }
})