import React,{Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,TouchableOpacity
} from 'react-native';
import PostDetails from './PostDetails';

export default class App extends React {

    constructor(props) {
        super(props);
        this.state = { isLoading: true, text: '' };
        this.arrayholder = [];
    }

    componentDidMount() {
        return fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0')
        .then(response => response.json())
        .then(responseJson => {
            this.setState(
                {
                    isLoading: false,
                    dataSource: responseJson.hits
                },
                function() {
                    this.arrayholder = responseJson.hits;
                }
            );
        }).catch(error => {
            console.error(error);
        });
    }
    SearchFilterFunction(Text) {
        const newData = this.arrayholder.filter(function(item) {
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            dataSource: newData,
            text: text,
          });
    }
    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                height: 0.3,
                width: '90%',
                backgroundColor: '#080808',
                }}
            />
        );
    };

    render() {
        if(this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInputStyle}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    underlineColorAndroid="transparent"
                    placeholder="Search Here"
                />
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    renderItem={({ item }) => (
                    <TouchableOpacity style={styles.list}>
                        <Text>Title: {item.title}</Text>
                        <Text>URL:{item.url} </Text>
                        <Text>Created_at: {item.created_at}</Text>
                        <Text>Author: {item.author}</Text>
                    </TouchableOpacity>
                    )}
                    enableEmptySections={true}
                    style={{ marginTop: 10 }}
                    keyExtractor={(item, index) => index.toString()}
                    onPress={() => navigation.navigate('PostDetails')}
                />
            </View>
        );
    };
}
const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        flex: 1,
        marginTop: 40,
        padding: 16,
    },
    textStyle: {
        padding:10,
    },
    textInputStyle: {
        height: 40,
        borderWidth: 10,
        paddingLeft: 10,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    isLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    list: {
        paddingVertical: 4,
        margin:5,
        backgroundColor: '#fff'
    },
    scrollView: {
        backgroundColor: 'red',
        marginHorizontal: 20,
    }
});