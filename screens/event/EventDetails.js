import { SafeAreaView } from "react-native";
import { COLORS } from "../../constants";
import { EventImage, Details, EventOrganizer, Footer, EventItenary, EventLocation } from "./components";
import { ScrollView } from "react-native-gesture-handler";

const EventDetails = () => {
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 24 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <EventImage />
                <Details />
                <EventOrganizer />
                <EventItenary />
                <EventLocation />
            </ScrollView>
            <Footer />
        </SafeAreaView>

    );
}

export default EventDetails;