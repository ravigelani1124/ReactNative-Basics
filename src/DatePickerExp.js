import React, { useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import DatePicker from "react-native-date-picker";

//https://github.com/henninghall/react-native-date-picker

const DatePickerExp = () => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>

            <Button style={styles.button} title title="Open" onPress={() => setOpen(true)} />
            <DatePicker
                modal
                open={open}
                date={date}
                //mode='time'
                mode='datetime'
                //mode='date'
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
            <DatePicker date={date} onDateChange={setDate} />
        </View>
     );
}

export default DatePickerExp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        borderRadius: 10,
        height: 50
    }
})