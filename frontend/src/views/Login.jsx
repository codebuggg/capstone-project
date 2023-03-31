import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";
import BaseLink from "../components/BaseLink";
import BasePasswordInput from "../components/BasePasswordInput";
import { HOST } from "../const";
import { storeToken } from "../lib";

const Login = () => {
    
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {
            const res = await fetch(`${HOST}/login`, {
                method: "post",
                body: JSON.stringify(values),
                headers: {
                    "content-type": "application/json"
                }
            });
            if(res.ok){
                storeToken(res.headers);
                navigate("/");
            }
        } catch (e) {
            console.log(e);
        }
    }


    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit
    })


    return (
        <>
            <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <div className="text-center">
                        <BaseLink
                            to="/sign_up"
                        >
                            Create an account
                        </BaseLink>
                    </div>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={formik.handleSubmit} >

                            <BaseInput
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />

                            <BasePasswordInput
                                id="password"
                                label="Password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />

                            <div className="flex items-center justify-between">


                                <BaseLink
                                    to="/forgot-password"
                                >
                                    Forgot your password?
                                </BaseLink>
                            </div>

                            <div>
                                <BaseButton>
                                    Sign in
                                </BaseButton>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Login;