import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
	const [open, setOpen] = useState(true);

	const handleOpen = () => {
		setOpen(false);
	};



	return (
		<View style={styles.container}>
			{!open ? (
				<View>
					<Image source={require("./assets/biscoitoQuebrado.png")}></Image>
					
				</View>
			) : (
				<Image source={require("./assets/biscoito.png")}></Image>
			)}

			<Text onPress={handleOpen}>Quebrar biscoito</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
