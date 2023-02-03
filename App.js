import Routers from "./Routers";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App(){
  const orientation = useDeviceOrientation()
  console.log('orientation is: ', orientation)

  return(
    <Routers orientacao = {orientation}/>
  )
}
