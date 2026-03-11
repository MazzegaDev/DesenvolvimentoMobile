import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.caixa1}>
				<Text style={styles.text}>Caixa 1</Text>
			</View>

			<View style={styles.caixa2}>
				<Text style={styles.text}>Caixa 2</Text>
			</View>

			<View style={styles.caixa3}>
				<Text style={styles.text}>Caixa 3</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
    alignItems: "center",
    gap: '2%',
		width: "100%",
		height: "100%",
	},
	caixa1: {
		backgroundColor: "blue",
		width: "30%",
		height: "30%",
    bottom: "20%"
	},
	caixa2: {
		backgroundColor: "red",
		width: "30%",
		height: "30%",
	},
	caixa3: {
		backgroundColor: "green",
		width: "30%",
		height: "30%",
    top: "20%"
	},
  text:{
    top: "50%",
    alignSelf: "center"
  }
});
