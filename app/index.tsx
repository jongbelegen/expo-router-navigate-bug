import {Button} from "@/components/Button";
import {useRouter} from "expo-router";

export default () => {
    const router = useRouter();

    return <Button onPress={() => router.navigate("/a")}>Go to screen a</Button>
}