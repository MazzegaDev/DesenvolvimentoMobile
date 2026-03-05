import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

export default function App() {
	const [salary, setSalary] = useState("");
	const [error, setError] = useState("");
	const [tax, setTax] = useState("");

	const handleSalary = () => {
		const parsed = parseFloat(salary);

		if (isNaN(parsed)) {
			setError("Informe um número válido");
			return;
		}

		setError("");

		const tax = handleTax(parsed);
		setTax(tax);
	};

	const handleTax = (parsed) => {
		let aliquota = 0;
		let deducao = 0;

		switch (true) {
			case parsed <= 1400:
				aliquota = 0;
				deducao = 0;
				break;

			case parsed <= 2100:
				aliquota = 0.1;
				deducao = 100;
				break;

			case parsed <= 2800:
				aliquota = 0.15;
				deducao = 270;
				break;

			case parsed <= 3600:
				aliquota = 0.25;
				deducao = 500;
				break;

			default:
				aliquota = 0.3;
				deducao = 700;
		}

		return parsed * aliquota - deducao;
	};

	return (
		<View style={styles.container}>
			<StatusBar style="dark" />

			<View style={styles.card}>
				<Text style={styles.title}>Calculadora de Imposto</Text>

				<Text style={styles.label}>Informe sua renda mensal</Text>

				<TextInput
					placeholder="R$ 0,00"
					value={salary}
					onChangeText={setSalary}
					keyboardType="numeric"
					style={styles.input}
				/>

				{error ? <Text style={styles.error}>{error}</Text> : null}

				<TouchableOpacity style={styles.button} onPress={handleSalary}>
					<Text style={styles.buttonText}>Calcular</Text>
				</TouchableOpacity>

				{tax !== "" && (
					<View style={styles.resultCard}>
						<Text style={styles.resultLabel}>Imposto a pagar</Text>
						<Text style={styles.resultValue}>R$ {tax.toFixed(2)}</Text>
					</View>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F4F6F8",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},

	card: {
		width: "100%",
		backgroundColor: "#FFF",
		padding: 25,
		borderRadius: 16,

		shadowColor: "#000",
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 10,

		elevation: 6,
	},

	title: {
		fontSize: 22,
		fontWeight: "bold",
		marginBottom: 20,
		textAlign: "center",
	},

	label: {
		fontSize: 14,
		color: "#555",
		marginBottom: 6,
	},

	input: {
		borderWidth: 1,
		borderColor: "#DDD",
		borderRadius: 10,
		padding: 14,
		fontSize: 16,
		backgroundColor: "#FAFAFA",
	},

	error: {
		color: "#E63946",
		marginTop: 8,
	},

	button: {
		backgroundColor: "#2A9D8F",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
		marginTop: 20,
	},

	buttonText: {
		color: "#FFF",
		fontSize: 16,
		fontWeight: "bold",
	},

	resultCard: {
		marginTop: 25,
		backgroundColor: "#F1FAF9",
		padding: 18,
		borderRadius: 12,
		alignItems: "center",
	},

	resultLabel: {
		fontSize: 14,
		color: "#666",
	},

	resultValue: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#2A9D8F",
		marginTop: 5,
	},
});
