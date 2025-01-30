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

                    <h1 className="text-2xl font-semibold" style={{ color: '#5E83AF' }}>Bienvenido a VetCare</h1>
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
                                value={user.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                required
                                id="outlined-required"
                                label="Nombre completo"

                            />
                            <TextField
                                value={user.speciality}
                                onChange={(e) => handleChange('speciality', e.target.value)}
                                required
                                id="outlined-required"
                                label="Especialidad"

                            />
                            <TextField
                                value={user.password}
                                onChange={(e) => handleChange('password', e.target.value)}
                                id="outlined-password-input"
                                label="Contraseña"
                                type="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                value={user.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                required
                                id="outlined-required"
                                label="Correo electronico"

                            />
                            <TextField
                                value={user.dni}
                                onChange={(e) => handleChange('dni', e.target.value)}
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
                                value={user.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
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
                            className="w-full text-white py-3 rounded-lg hover:opacity-80 transition"
                            style={{ backgroundColor: '#486F9A' }}
                        >
                            Crear Cuenta
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