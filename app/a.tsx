import {Text, View} from "react-native";
import {Button} from "@/components/Button";
import {useRouter} from "expo-router";

export default () => {
    const router = useRouter();

    return <View>
        <Text>Screen A</Text>
        <Button onPress={() => router.navigate("/b")}>Go to screen b</Button>
    </View>
}