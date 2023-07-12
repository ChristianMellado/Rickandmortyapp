import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableOpacity,
	StatusBar,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { SvgXml } from 'react-native-svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonLogin from '../ButtonLogin';
import { user, useDetail } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm(props) {
	const logoRef = useRef('../../assets/imglogpng.png');
	const { navigation, setAuth } = props;
	const [error, setError] = useState('');
	const { login } = useAuth();

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnChange: false,
		onSubmit: (formData) => {
			setError('');
			const { username, password } = formData;
			if (username !== user.username || password !== user.password) {
				console.log('Usuario o contraseña incorrectos');
				setError('Usuario o contraseña incorrectos');
			} else {
				//setAuth(username);

				console.log('Login correcto');
				navigation.navigate('Account');
				login(useDetail);
			}
		},
	});

	function validationSchema() {
		return {
			username: Yup.string().required('El nombre de usuario es obligatorio'),
			password: Yup.string().required('La contrasena es obligatoria'),
		};
	}

	function initialValues() {
		return {
			username: '',
			password: '',
		};
	}

	const goToCrearCuenta = () => {
		navigation.navigate('CrearCuenta');
	};

	const goToOlvidaste = () => {
		navigation.navigate('OlvidasteContrasena');
	};

	return (
		<View style={styles.Container}>
			<View style={styles.containerSvg}>
				<StatusBar backgroundColor='#fff' barStyle='dark-content' />
				<SvgXml
					width='414'
					height='244'
					xml={fondoSvg}
					style={styles.fondoLogin}
				/>
			</View>
			<View style={styles.containerForm}>
				<Text style={styles.titulo}>Hola</Text>
				<Text style={styles.subitutlo}>Ingresa a tu cuenta</Text>
				<TextInput
					placeholder='Usuario : chrismellado'
					style={styles.inputText}
					autoCapitalize='none'
					value={formik.values.username}
					onChangeText={(text) => formik.setFieldValue('username', text)}
				/>
				<Text style={styles.error}>{formik.errors.username}</Text>
				<TextInput
					placeholder='Contrasena 12345678'
					style={styles.inputText}
					autoCapitalize='none'
					secureTextEntry={true}
					value={formik.values.password}
					onChangeText={(text) => formik.setFieldValue('password', text)}
				/>
				<Text style={styles.error}>{formik.errors.password}</Text>

				<Text style={styles.text2}>¿Olvidaste tu contrasena?</Text>
				<ButtonLogin onPress={formik.handleSubmit} />
				<Text style={styles.error}>{error}</Text>

				<View style={styles.crearcuenta}>
					<Text style={styles.subtitulo}>¿No tienes tu cuenta?</Text>
					<TouchableOpacity onPress={goToCrearCuenta}>
						<Text style={styles.subtitulo2}>Crear</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
const fondoSvg = `<svg width="414" height="244" viewBox="0 0 414 244" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H414V244L345.5 132L292 180.5L200.5 132H78.7978C71.7866 132 65.2873 135.671 61.6683 141.676L0 244V0Z" fill="url(#paint0_linear_9_85)"/>
<defs>
<linearGradient id="paint0_linear_9_85" x1="207" y1="0" x2="207" y2="244" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD233"/>
<stop offset="0.755208" stop-color="#F8F7F5" stop-opacity="0.244792"/>
<stop offset="1" stop-color="#B5AFAF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`;
const styles = StyleSheet.create({
	Container: {
		backgroundColor: '#f2f2f2',
		height: '100%',
		top: -39,
	},
	containerSvg: {
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	containerForm: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	crearcuenta: {
		flexDirection: 'row',
		marginTop: 10,
	},
	subtitulo2: {
		fontSize: 20,
		color: '#000000',
		fontWeight: 'bold',
	},
	titulo: {
		fontSize: 70,
		color: '#000000',
		fontWeight: 'bold',
	},
	subtitulo: {
		fontSize: 20,
		color: '#000000',
	},
	mainContainer: {
		backgroundColor: '#F8F4F4',
		height: '100%',
	},
	containerSvg: {
		marginTop: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	error: {
		color: 'red',
		fontSize: 14,
		marginTop: 10,
		textAlign: 'center',
	},
	fondoLogin: {
		top: 20,
	},
	containerForm: {
		flex: 1,
		marginTop: -250,
		justifyContent: 'center',
		alignItems: 'center',
	},
	centeredContent: {
		marginTop: 100,
		alignItems: 'center',
	},
	titulo: {
		fontSize: 70,
		color: '#000000',
		fontWeight: 'bold',
	},
	subTitulo: {
		fontSize: 20,
		color: '#000000',
	},
	inputText: {
		height: 60,
		width: 350,
		backgroundColor: '#F8F8F8',
		borderRadius: 20,
		padding: 15,
		marginTop: 15,
		paddingStart: 20,
	},
	text2: {
		fontSize: 15,
		color: '#848484',
		marginTop: 15,
		marginRight: -140,
	},
	text3: {
		fontSize: 15,
		color: '#848484',
		marginTop: 100,
		marginBottom: -100,
		marginRight: -20,
	},
	boldText: {
		fontWeight: 'bold',
	},
});
