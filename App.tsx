import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import * as Updates from 'expo-updates';

function App() {
  
    useEffect(() => {
        const checkForUpdates = async () => {
            const updateRes = await Updates.checkForUpdateAsync()

            if (updateRes.isAvailable) {
                await Updates.fetchUpdateAsync()

                Alert.alert('Fetched update', 'click to reload', [
                  {
                    text: "Update",
                    onPress: async() => await Updates.reloadAsync(),
                  }
                ])
            } else {
              Alert.alert('No new update', 'try reopening the app')
            }
        }

        checkForUpdates().catch(console.error)

    }, []);

    return (
        <View style={styles.container}>

        </View>
    );
}

export default App;


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        // backgroundColor: '#f00'
        backgroundColor: '#0f0'
    }
})