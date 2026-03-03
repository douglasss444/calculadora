import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

export default function Page() {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.div}>
        <TextInput style={styles.input} editable={true}></TextInput>
      </View>

      <View style={styles.div1}>
        <View style={styles.div2}>

          <View style={styles.linha}>
            <TouchableOpacity style={[styles.botao, styles.notop, styles.noleft]}>
              <Text style={styles.tecla}>C</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.notop]}>
              <Text style={styles.tecla}>(</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.notop]}>
              <Text style={styles.tecla}>)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.notop, styles.noright]}>
              <Text style={styles.tecla}>÷</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linha}>
            <TouchableOpacity style={[styles.botao, styles.noleft]}>
              <Text style={styles.tecla}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.tecla}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.tecla}>9</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.noright]}>
              <Text style={styles.tecla}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linha}>
            <TouchableOpacity style={[styles.botao, styles.noleft]}>
              <Text style={styles.tecla}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.tecla}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.tecla}>6</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.noright]}>
              <Text style={styles.tecla}>-</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.linha}>
            <TouchableOpacity style={[styles.botao, styles.noleft]}>
              <Text style={styles.tecla}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.tecla}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.tecla}>3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.noright]}>
              <Text style={styles.tecla}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linha}>
            <TouchableOpacity style={[styles.botao, styles.noleft, styles.nobottom]}>
              <Text style={styles.tecla}>%</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.nobottom]}>
              <Text style={styles.tecla}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.nobottom]}>
              <Text style={styles.tecla}>.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.botao, styles.noright, styles.nobottom]}>
              <Text style={styles.tecla}>=</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  div: {
    backgroundColor: "#161616",
    width: "100%",
    height: "35%",
    justifyContent: "center",
  },

  input: {
    // backgroundColor: "green",
    height: 60,
  },

  div1: {
    backgroundColor: "black",
    width: "100%",
    height: "65%",
    alignItems: "center",
    justifyContent: "center", 
  },

  div2: {
    backgroundColor: "green",
    width: "92%",
    height: "95%",
  },

  linha: {
    // backgroundColor: "green",
    flexDirection: "row",
    height: "20%",
  },

  botao: {
    backgroundColor: "black",
    width: "25%",
    // height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: .4,
    borderColor: "white",
  },

  tecla: {
    color: "white",
    fontSize: 30,
  },

  notop: {
    borderTopWidth: 0,
  },

  noright: {
    borderRightWidth: 0,
  },

  nobottom: {
    borderBottomWidth: 0,
  },

  noleft: {
    borderLeftWidth: 0,
  },
}); 