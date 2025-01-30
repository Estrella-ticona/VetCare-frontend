import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useSignUp } from '../hooks/useSignUp';


export function Register() {
    const { user, handleChange, handleSubmit } = useSignUp();

    const register = async (e: any) => {
        e.preventDefault();
        await handleSubmit();
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-12 rounded-2xl shadow-md w-1/2 max-w-2x1">
                <div className="text-center mb-6">

                    <h1 className="text-2xl font-semibold text-blue-600">Bienvenido a VetCare</h1>
                    <p className="text-gray-600 mt-2">complete sus datos</p>
                </div>
                <form onSubmit={register}>
                    <div className="mb-4">
                        <label htmlFor="user" className="block text-gray-700">

                        </label>
                        <Box className='grid grid-cols-2 gap-4'
                            component="form"
                            sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField
                                required
                                id="outlined-required"
                                label="Nombre completo"
                                defaultValue="Carlos Torres"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Especialidad"
                                defaultValue="Cirujano"
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Contraseña"
                                type="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Correo electronico"
                                defaultValue="carlostorres@gmail.com"
                            />
                            <TextField
                                id="outlined-number"
                                label="DNI"
                                type="number"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                            />
                            <TextField
                                id="outlined-number"
                                label="Numero de telefono"
                                type="number"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                            />

                        </Box>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Create
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4 text-gray-600">
                    Already have an account? <a href="/login" className="text-blue-600">Log in</a>
                </p>
            </div>
        </div>
    )
}