import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, ICONS } from '../../constants'
import TicketStrip from './TicketStrip';
import { useRouter } from 'expo-router';
import { useGetUserActiveBookingsQuery, useGetUserPastBookingsQuery } from '../../redux/bookings/bookingApiSlice';
import { useDispatch } from 'react-redux';
import { setCurrentBooking } from '../../redux/bookings/bookingSlice';


const UpcomingPastTickets = ({ tabOptions, selected }) => {
    const [warning, setWarning] = useState(null)
    const { data: activeBookings, isLoading: activeBookingsLoading, isError: activeBookingsError } = useGetUserActiveBookingsQuery();
    const { data: pastBookings, isLoading: pastBookingsLoading, isError: pastBookingsError } = useGetUserPastBookingsQuery();

    const dispatch = useDispatch();
    const router = useRouter();

    const getSelectedBookings = () => {
        if (selected === "Upcoming") {
            return activeBookings
        } else if (selected === "Past") {
            return pastBookings
        } else {
            return []
        }
    }

    const handleClickedTicket = (booking) => {
        dispatch(setCurrentBooking(booking))
        if (selected === "Upcoming" && activeBookings) {
            router.push('tickets/TicketQrcode')
        } else if (selected === "Past" && pastBookings) {
            setWarning("Event ended. You can't view the ticket anymore!")
            console.log(warning)
        }

    }

    const selectedBookings = getSelectedBookings();
    return (
        <View style={styles.container}>
            {selectedBookings && selectedBookings?.data.map((booking) => (
                <TicketStrip key={booking?.bookingId} booking={booking} handleClickedTicket={() => handleClickedTicket(booking)} />
            ))

            }
        </View>
    )
}

export default UpcomingPastTickets

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 16,
        marginTop: 16
    },

})