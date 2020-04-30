import React, {Component} from 'react';


export default class PostDetails extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Posts Details</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Post')}
        />
      </View>
    );
  }
}