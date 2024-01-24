import React from "react";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Primeiro from "./src/components/Primeiro";

import Mega from "./src/components/Mega";

export default () => (
  <SafeAreaView>
    <Mega quantidadeNumeros={7} />
    {/* <Text style={styles.container}>Método 1</Text> */}
    {/* <Text>{ 1 + 1 }</Text>  */}
    {/* { o que está dentro de {} é código JS, por isso q o comentário fica dentro de {} */}
    <Primeiro />
  </SafeAreaView>
);

// export default () => {
//   return <>
//     <Text style={styles.container}>Método 2</Text>
//     <Primeiro />
//   </>
// }

// export default function () {
//   return <Text style={styles.container}>Método 3</Text>
// }

// const App = function () {
//   return <Text style={styles.container}>Método 4</Text>
// }
// export default App;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    color: "red",
    backgroundColor: "yellow",
  },
});
