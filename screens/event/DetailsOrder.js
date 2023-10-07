import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Footer } from './components'

const DetailsOrder = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1, overflow: 'hidden' }}>
            <Footer
                info={"UGX 150,000"}
                spotInfo={"You're going! +1"}
                label={"Place Order"}
            />
        </SafeAreaView>
    )
}

export default DetailsOrder