
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


//Flex Direction

// column (default value)   Align children from top to bottom. If wrapping is enabled, 
// then the next line will start to the right of the first item on the top of the container.

// row    Align children from left to right. If wrapping is enabled, 
// then the next line will start under the first item on the left of the container.

// column-reverse Align children from bottom to top. If wrapping is enabled, 
// then the next line will start to the right of the first item on the bottom of the container.

// row-reverse Align children from right to left. If wrapping is enabled, 
// then the next line will start under the first item on the right of the container.

const DirectionLayout = () => {
    const [direction, setDirection] = useState("ltr");

    return (
        <PreviewLayout
            label="direction"
            selectedValue={direction}
            values={["ltr", "rtl"]}
            setSelectedValue={setDirection}>
            <View
                style={[styles.box, { backgroundColor: "powderblue" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "skyblue" }]}
            />
            <View
                style={[styles.box, { backgroundColor: "steelblue" }]}
            />
        </PreviewLayout>
    );
};

export default DirectionLayout;

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}) => (
    <View style={{ padding: 10, flex: 1 }}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.row}>
            {values.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => setSelectedValue(value)}
                    style={[
                        styles.button,
                        selectedValue === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={[styles.container, { [label]: selectedValue }]}>
            {children}
        </View>
    </View>
);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: "aliceblue"
    },
    box: {
        width: 50,
        height: 50
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center"
    },
    selected: {
        backgroundColor: "coral",
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 20,
        fontWeight: "500",
        color: "coral",
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
    },
});