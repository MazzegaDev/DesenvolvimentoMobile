import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numero: 0,
			titulo: "Começar",
		};
		this.timer = null;
	}

	start = () => {
		if (this.timer !== null) {
			clearInterval(this.timer);
			this.timer = null;
			this.setState({ titulo: "Começar" });
		} else {
			this.timer = setInterval(() => {
				this.setState((prevState) => ({
					numero: prevState.numero + 1,
				}));
			}, 100);

			this.setState({ titulo: "Parar" });
		}
	};

	zerar = () => {
		clearInterval(this.timer);
		this.timer = null;
		this.setState({
			numero: 0,
			titulo: "Começar",
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Image source={require("./assets/66175.png")} style={styles.imagem} />

				<Text style={styles.timer}>{this.state.numero}s</Text>

				<View style={styles.areaBotoes}>
					<TouchableOpacity style={[styles.botao, styles.botaoStart]} onPress={this.start}>
						<Text style={styles.textoBotao}>{this.state.titulo}</Text>
					</TouchableOpacity>

					<TouchableOpacity style={[styles.botao, styles.botaoReset]} onPress={this.zerar}>
						<Text style={styles.textoBotao}>Zerar</Text>
					</TouchableOpacity>
				</View>

				<StatusBar style="light" />
			</View>
		);
	}
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1E1E1E",
		alignItems: "center",
		justifyContent: "center",
	},

	imagem: {
		width: 150,
		height: 150,
		marginBottom: 30,
	},

	timer: {
		fontSize: 50,
		color: "#FFF",
		fontWeight: "bold",
		marginBottom: 30,
	},

	areaBotoes: {
		flexDirection: "row",
		gap: 15,
	},

	botao: {
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 8,
		elevation: 5,
	},

	botaoStart: {
		backgroundColor: "#4CAF50",
	},

	botaoReset: {
		backgroundColor: "#F44336",
	},

	textoBotao: {
		color: "#FFF",
		fontSize: 18,
		fontWeight: "bold",
	},
});
