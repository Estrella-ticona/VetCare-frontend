import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSignIn } from '../hooks/useSignIn';


export function Login() {
    const { user, handleChange, handleSubmit } = useSignIn();

    const login = async (e: any) => {
        e.preventDefault();
        await handleSubmit();
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-4/5 max-w-4xl">

                <div className="w-1/2 bg-blue-100 flex items-center justify-center p-4">
                    <img src="/assets/vet.jpg" alt="mascotas" />

                </div>


                <div className="w-1/2 p-8">
                    <h1 className="text-2xl font-bold text-gray-700 mb-6"></h1>

                    {/* FORMULARIO */}
                    <form onSubmit={login}>
                        <div className="mb-4">
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '40 ch' } }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField
                                    value={user.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    id="outlined-basic"
                                    label="Usuario"
                                    variant="outlined" />
                            </Box>
                        </div>
                        <div className="mb-4">
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
                                noValidate
                                autoComplete="off"
                            >

                                <TextField
                                    value={user.password}
                                    onChange={(e) => handleChange('password', e.target.value)}
                                    id="outlined-basic" label="Contraseña" variant="outlined" type='password' />
                            </Box>
                        </div>
                        <div className="text-right mb-4">
                            <a
                                href="#"
                                className="text-red-500 text-sm hover:underline"
                            >
                                olvidaste tu contraseña?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
                        >
                            Iniciar sesión
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600">
                        ¿No tienes cuenta?{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                            Regístrate
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}