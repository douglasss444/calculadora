import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function RootLayout() {
	const [contador, setContador] = useState(0);

	function adicionarMaisUm(){
		setContador(contador + 1)
	}

	return (
		<>
			<Text style={{ fontSize: 20, alignSelf: 'center' }}>Calculadora {contador} </Text>

			<TouchableOpacity style={styles.botao} onPress={adicionarMaisUm}>
				<Text>=</Text>
				<Text>1</Text>
				<Text>2</Text>
				<Text>3</Text>
				<Text>4</Text>
				<Text>5</Text>
				<Text>6</Text>
				<Text>7</Text>
				<Text>8</Text>
				<Text>9</Text>
				<Text>0</Text>
				<Text>+</Text>
				<Text>-</Text>
			</TouchableOpacity>


		</>
	);
}

const styles = StyleSheet.create({
	botao:{
		backgroundColor: '#aae7ff',
		marginHorizontal: 10,
		padding: 20,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
});