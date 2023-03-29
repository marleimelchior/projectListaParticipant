import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { styles } from "./styles";

type Props = {
    name: string;
    onRemove: () => void;
}

export default function Participant(props: Props){
    return(
        <View style={styles.form}>
            <TextInput 
            style={styles.input} 
            placeholder={props.name}
            placeholderTextColor="#6b6b6b"/>   
        
            <TouchableOpacity style={styles.btnParcipante} onPress={props.onRemove}>
            
                <Text style={styles.btnText}>-</Text>
        
            </TouchableOpacity>

            
        </View>
    )
}