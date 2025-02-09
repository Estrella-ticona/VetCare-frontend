import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSignIn } from '../hooks/useSignIn';
import { Link } from 'react-router';

export function Login() {
    const { user, handleChange, handleSubmit } = useSignIn();

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleSubmit();
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen">
            {/* Imagen de fondo */}
            <img
                src="/assets/vet.jpg"
                alt="mascotas"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Capa semitransparente */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Contenedor del formulario */}
            <div className="relative w-full max-w-md bg-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
                <h1 className="text-2xl font-bold mb-6 text-center text-white shadow-2xl">VetCare</h1>

                <form onSubmit={login}>
                    <div className="mb-4">
                        <Box sx={{ '& > :not(style)': { m: 1, width: '100%' } }}>
                            <TextField
                                value={user.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                label="Usuario"
                                variant="outlined"
                                fullWidth
                            />
                        </Box>
                    </div>
                    <div className="mb-4">
                        <Box sx={{ '& > :not(style)': { m: 1, width: '100%' } }}>
                            <TextField
                                value={user.password}
                                onChange={(e) => handleChange('password', e.target.value)}
                                label="Contraseña"
                                variant="outlined"
                                type="password"
                                fullWidth
                            />
                        </Box>
                    </div>
                    <div className="text-right mb-4">
                        <a href="#" className="text-red-500 text-sm hover:underline">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-celeste-900 text-white font-semibold py-2 rounded hover:opacity-80 transition"
                    >
                        Iniciar sesión
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-700">
                    ¿No tienes cuenta?{' '}
                    <Link to="/register" className="text-celeste-900 hover:underline">
                        Regístrate
                    </Link>
                </p>
            </div>
        </div>
    );
}
