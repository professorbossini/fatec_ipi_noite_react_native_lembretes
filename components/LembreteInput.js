import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';


const LembreteInput = (props) => {

    const [lembrete, setLembrete] = useState('');

    return (
        <View style={estilos.lembreteView}>
            <TextInput
                placeholder="Lembrar..."
                style={estilos.lembreteTextInput}
                onChangeText={(t) => setLembrete(t)}
                value={lembrete}
            />
            <View
                style={estilos.botao}>
                <Button
                    title="Adicionar lembrete"
                    onPress={() => props.onAdicionarLembrete(lembrete)}
                />
            </View>
            <View
                style={estilos.botao}>
                <Button
                    title="Apagar tudo"
                    onPress={() => { props.onApagarTudo() }} />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    lembreteTextInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
    },
    lembreteView: {
        marginBottom: 8,
        alignItems: 'center'

    },
    botao: {
        width: '80%',
        marginTop: 8
    }
});

export default LembreteInput;