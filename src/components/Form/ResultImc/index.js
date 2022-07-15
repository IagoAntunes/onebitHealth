import react from 'react-native';
import { Text, View , TextInput, Button } from 'react-native';


export default function ResultImc(props){
    return(
        <View>
            <Text>{props.resultImc}</Text>
            <Text>{props.messageResultImc}</Text>
        </View>
    )
}


