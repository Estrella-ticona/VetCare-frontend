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
            <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                <div className="text-center mb-6">

                    <h1 className="text-2xl font-semibold text-blue-600">Bienvenido a VetCare</h1>
                    <p className="text-gray-600 mt-2">complete sus datos</p>
                </div>
                <form onSubmit={register}>
                    <div className="mb-4">
                        <label htmlFor="user" className="block text-gray-700">

                        </label>
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '60 ch' } }}
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
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">

                        </label>
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '40 ch' } }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField
                                value={user.password}
                                onChange={(e) => handleChange('password', e.target.value)}
                                id="outlined-basic" label="Contraseña" variant="outlined" type='password' />
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