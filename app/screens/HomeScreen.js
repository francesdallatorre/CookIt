import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { SearchBar, ListItem, Avatar, Card, Icon } from 'react-native-elements'



// move this data to it's own folder and import it
const Categories = [
    { name: 'Gluten Free', image: 'https://i.pinimg.com/originals/1d/53/d8/1d53d8b3b697378c1710a22edc0a9215.jpg' },
    { name: 'Vegan', image: 'https://previews.123rf.com/images/shawlinmohd/shawlinmohd1911/shawlinmohd191100010/134220541-vegan-logo-with-green-leaves-for-organic-vegetarian-friendly-diet-universal-vegetarian-symbol.jpg' },
    { name: 'Keto', image: 'https://cdn1.vectorstock.com/i/1000x1000/49/55/ketogenic-diet-logo-sign-keto-diet-vector-25844955.jpg' },
    { name: 'Paleo', image: 'https://pbs.twimg.com/profile_images/633450005831913472/Hv7-M3UG_400x400.png' },
    { name: 'American', image: 'https://image.freepik.com/free-vector/burger-logo_1366-144.jpg' },
    { name: 'Italian', image: 'https://image.freepik.com/free-vector/pizza-logo-design-template_15146-192.jpg' },
    { name: 'French', image: 'https://thumbs.dreamstime.com/b/croissant-icon-bakery-shop-emblem-badge-logo-vintage-design-vector-153989766.jpg' },
    { name: 'Mexican', image: 'https://image.freepik.com/free-vector/taco-logo-template-vector-illustration_6427-331.jpg' },
    { name: 'Asian', image: 'https://image.freepik.com/free-vector/wok-noodle-box-logo-flat-line-cartoon-illustration-icon-isolated-white-background-asian-food-noodle-wok-box-logo-concept_92289-2023.jpg' },
    { name: 'Chinese', image: 'https://img.freepik.com/free-vector/chinese-food-isolated-flat-cartoon-illustration-icon-isolated-white-noodles-box-original-recipe-chopsticks-wok-noodles-chinese-food-logo_92289-504.jpg?size=626&ext=jpg' },
    { name: 'Japanese', image: 'https://cdn1.vectorstock.com/i/thumb-large/70/75/salmon-sushi-vector-8117075.jpg' },
    { name: 'Korean', image: 'https://img.favpng.com/21/18/10/hot-pot-kimchi-jjigae-chinese-cabbage-illustration-png-favpng-MuDFZGPpZ1niH1rzc834RVTS4.jpg' },
    { name: 'Indian', image: 'https://www.logodesign.net/logo-new/pattern-on-clay-pot-for-indian-restaurant-6940ld.png' },
    { name: 'Mediterranean', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldRay9sIrH-Or7z3mQ9QTqf3mW5aoXZEle_GzZI6SsCJkSkW1uEtsgQqO89QCghAl5Zw&usqp=CAU' },
    { name: 'Smoothies', image: 'https://image.freepik.com/free-vector/delicious-healthy-smoothie-cartoon_24640-53251.jpg' },
    { name: 'Dessert', image: 'https://t3.ftcdn.net/jpg/02/96/29/26/360_F_296292690_ORfjoE7571LwxbfQETmUjdzKzDXc9neN.jpg' },
    { name: 'Cookies', image: 'https://lh3.googleusercontent.com/proxy/fzshHv2_TGsFSK2WOcaGHy2o3JvKqbFF1KAIJT4YrOZ83Rmr7ZXtF8DAuLkGTTI31GEu5c7DWWgsRQGgrlq6BGNDVSRT2yc' },
    { name: 'Pastries', image: 'https://as2.ftcdn.net/jpg/01/74/92/29/500_F_174922983_ysMZYzZK48JFG19azGo18zbmJXN8ZMmO.jpg' }
]

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: [],
            query: '',
            search: false
        }
    }
    onChangeQuery(text) {
        this.setState({
            query: text
        })
    }
    // Find a way to consolidate getData and getCategory functions
    getData() {
        let APP_ID = 'c145a587'
        let API_KEY = 'd85405c20f6bc0091ccc6d5287f81cc7'
        fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=` + this.state.query)
            .then(resp => { return resp.json() })
            .then(json => this.setState({
                recipes: json.hits,
                query: ''
            }))

        setTimeout(() => {
            this.props.navigation.navigate('Results', { recipes: this.state.recipes })
        }, 700);
    }

    getCategory(category) {
        let APP_ID = 'c145a587'
        let API_KEY = 'd85405c20f6bc0091ccc6d5287f81cc7'
        fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=` + category)
            .then(resp => { return resp.json() })
            .then(json => this.setState({
                recipes: json.hits,
                query: ''
            }))
        setTimeout(() => {
            this.props.navigation.navigate('Results', { recipes: this.state.recipes })
        }, 700);
    }
    handleLogOut = () => {
        alert("You have logged out!")

        fetch("http://localhost:8000/recipes/logout", {
            method: 'GET'
        })
            .then((resp) => {
                return resp.json();
            })
            .then((jsonData) => {
                console.log(JSON.stringify(jsonData));

            })
            .catch((e) => {
                console.log(e);
            })
        this.props.navigation.navigate('Login')

    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.nav}>
                        <Card.Title style={styles.navtext} onPress={() => this.props.navigation.navigate('MyRecipes')}> My Recipes</Card.Title>
                        <View style={styles.navbar}>
                            <Icon
                                name='logout'
                                onPress={() => { this.handleLogOut() }}
                                style={styles.icon}
                            />
                        </View >

                    </View>
                    <Image
                        source={require('../assets/food.webp')}
                        title="Cook It"
                        featured
                        caption="Just search for it....and Cook It"
                        style={styles.image}
                    />
                    {/* Search Bar */}
                    <SearchBar
                        style={styles.searchBar}
                        round
                        lightTheme
                        onChangeText={(text) => this.onChangeQuery(text)}
                        value={this.state.query}
                        placeholder='search for recipes here'
                        onSubmitEditing={() => this.getData()}
                    />


                    {/* Categories */}




                    <View>
                        {
                            Categories.map((category, i) => (
                                < ListItem key={i} bottomDivider onPress={() => { this.getCategory(category.name) }} >
                                    {/* <Icon name="heartbeat" type="font-awesome" /> */}
                                    <Avatar rounded source={{ uri: category.image }}></Avatar>
                                    <ListItem.Content>
                                        <ListItem.Title>{category.name}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            ))
                        }
                    </View>
                </ScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eee'
    },
    nav: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginLeft: 250,
        padding: 5,

    },
    navtext: {
        fontSize: 15
    },
    image: {
        height: 200,
        width: 415
    },
    navbar: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        color: 'black',
        marginBottom: 2,
        marginLeft: 10

    },

});
