import react,{useState} from 'react-native';
import { Text, View , TextInput, Button } from 'react-native';
import ResultImc from './ResultImc/index';

export default function Form(){

    const [] = useState(null);
    const [] = useState(null);
    const [] = useState(null);
    const [] = useState(null);
    
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                placeholder = 'Ex... 1.75'
                keyboardType="numeric">
                </TextInput>

                <Text>Peso</Text>
                <TextInput 
                placeholder = 'Ex.. 68'
                keyboardType="numeric">
                </TextInput>

                <Button title='Calcular IMC'/>
            </View>
            <ResultImc messageResultImc = {messageImc} resultImc = {imc}/>
        </View>
    )
}


