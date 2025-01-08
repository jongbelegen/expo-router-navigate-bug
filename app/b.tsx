import {Text, View} from "react-native";
import {Button} from "@/components/Button";
import {useRouter} from "expo-router";

export default () => {
    const router = useRouter();

    return <View>
        <Text>Screen B</Text>
        <Button onPress={() => router.navigate("/a")}>Go to screen a</Button>
    </View>
}