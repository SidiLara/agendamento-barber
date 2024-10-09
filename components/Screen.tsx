import React, { ReactNode } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';

interface ScreenWrapperProps {
    children: ReactNode;
    style?: ViewStyle;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.safeArea, style]}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                {children}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
});

export default ScreenWrapper;
