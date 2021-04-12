import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../app/screens/HomeScreen'
import SearchResults from '../app/screens/SearchResults';
import ShowRecipe from '../app/screens/ShowRecipe';
import Registration from '../app/screens/Registration'
import Login from '../app/screens/Login'
import MyRecipes from '../app/screens/MyRecipes';
import ShowMyRecipe from '../app/screens/ShowMyRecipe'




const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Sign In",
        },

    },
    Registration: {
        screen: Registration,
        navigationOptions: {
            title: "Create Account"
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
    },
    Results: {
        screen: SearchResults,
        navigationOptions: {
            title: 'Recipes Results'
        }
    },
    Recipe: {
        screen: ShowRecipe,
        navigationOptions: {
            title: 'Recipe'
        }
    },
    MyRecipes: {
        screen: MyRecipes,
        navigationOptions: {
            title: 'My Recipes'
        }
    },
    ShowMyRecipe: {
        screen: ShowMyRecipe,
        navigationOptions: {
            title: 'See Recipe'
        }
    },


}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
})

export default createAppContainer(HomeStack)