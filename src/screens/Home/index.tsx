import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import Participant from "../../components/Participant";

export default function Home(){
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd(){
        if(participants.includes(participantName)){
            return Alert.alert("participante existe", "Já existe um participante na lista com esse nome")
        }

        setParticipants( prevState => [...prevState ,participantName])
        setParticipantName('')
    }

    function handlerParticipantRemove(name: string){

        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))

            },
            {
                text: "Não",
                style: 'cancel'
            }
        ])
    }


  return(
    <View style={styles.container}>
        
        <Text style={styles.titleText}>Nome do Evento : </Text>

        <Text style={{color: '#FFF', marginTop: 10}}>Lista de Participantes :</Text>

        <View style={styles.form}>
            
            <TextInput 
            style={styles.input} 
            placeholder="Nome do participante"
            placeholderTextColor="#6b6b6b"
            onChangeText={setParticipantName}
            value={participantName}/>   
        
            <TouchableOpacity 
            style={styles.btnParcipante}
            onPress={handleParticipantAdd}>
            
                <Text style={styles.btnText}>+</Text>
        
            </TouchableOpacity>

        </View>

        <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => (
                    <Participant  key={item} name={item} onRemove={() => handlerParticipantRemove(item)}/>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>
                    Ninguém chegou no evento ainda? Adicione participantes a sua lista de convidados
                </Text>
            )}
        />        
    </View>
  )
}