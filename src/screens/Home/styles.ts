import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#131016",
      paddingStart: 24,
    },
    titleText: {
      color: "#fff",
      fontSize: 20,
      marginTop: 20
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
    btnText: {
        color: "#FFF",
        fontSize: 24,
    },
    btnParcipante: {
        borderColor: "#FFF",
        backgroundColor: "#00FF00",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 56,
        width: 56,
    },
    form: {
        flexDirection: 'row',
        marginTop: 30
    },
    listEmptyText: {
      color: "#FFF",
      fontSize: 14,
      textAlign: 'center',
      marginTop: 40
    }
  });