import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "#1f1e25",
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        color: '#FFF',   
    },
    btnText: {
        color: "#FFF",
        fontSize: 24,
    },
    input: {
        backgroundColor: "#1f1e25",
        height: 56,
        borderRadius: 5,
        color: "#FFF",
        padding: 16,
        fontSize: 16,
        marginRight: 12,
        width: 285,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnParcipante: {
        borderColor: "#FFF",
        backgroundColor: "#e23c44",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 56,
        width: 56,
    },
    form: {
        flexDirection: 'row',
        marginTop: 30
    }
});