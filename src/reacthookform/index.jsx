import { useForm } from "react-hook-form";

function Reacthookform() {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    // here register will basically track the changes on the perticular element which you register
    //handlesubmit called when the form gets submit like we used it in form before for preventing the default nature and many other things 
    //error is the nested property from formstate
    function onsubmitform(data)//handlesubmit will give you the data variable
    {
        console.log(data);//this is a object which contains a name object and of both register elments
        reset();
    }
    return (
        <div>
            <h1>react hook form</h1>
            <form onSubmit={handleSubmit(onsubmitform)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input {...register('email', {
                        required: true
                        // here required property tells the browser that the register element is compulsory to get filed
                    })} name="email" type="email" id="email" />
                    {
                        errors.email && errors.email.type === 'required' ? (<p>enter email</p>) : null
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input {...register('password', {
                        required: true,
                        minLength: 8
                    })} name="password" type="password" id="password" />
                    {
                        errors.password && errors.password.type === 'required' ? (<p>enter Password</p>) : null
                    }
                    {
                        errors.password && errors.password.type === 'minLength' ? (<p>enter Password should be atleast 8 character</p>) : null
                    }
                </div>
                <button type="submit">submit</button>
            </form>
        </div>

    )
}
export default Reacthookform;