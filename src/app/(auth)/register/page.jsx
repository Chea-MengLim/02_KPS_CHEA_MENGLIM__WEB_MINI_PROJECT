import SignUpButtonComponent from "@/components/SignUpButtonComponent";
import { signUpService } from "@/service/auth.service";

const RegisterPage = () => {

  async function handleSignUp(userInfo){
    'use server'
    // define object structure
    const newUserInfo = {
      firstname: userInfo.get("firstname"),
      lastname: userInfo.get("lastname"),
      gender: userInfo.get("gender"),
      profile_url: "string.jpg",
      email: userInfo.get("email"),
      password: userInfo.get("password")
    }
    
    const data = await signUpService(newUserInfo);
  }

  return (
    <main className="w-full px-24 pt-32">
      <img src="assets/icons/logo.svg" alt="" />
      <section className="flex justify-between mt-10">
        {/* Register info */}
        <form action={handleSignUp}  className="flex flex-col gap-y-4">
          <section className="flex gap-x-5">
            <div>
              First Name : <br />
              <input
                name="firstname"
                placeholder="Enter Your name.."
                type="text"
                className="border border-gray mt-3 w-[400px] h-10 rounded-lg pl-4 text-sm"
              />
            </div>
            <div>
              Last Name : <br />
              <input
                name = "lastname"
                placeholder="Enter Your name.."
                type="text"
                className="border border-gray mt-3 w-[400px] h-10 rounded-lg pl-4 text-sm"
              />
            </div>
          </section>
          <section className="flex gap-x-5">
            <div>
              Email : <br />
              <input
                name="email"
                placeholder="info@xyz.com"
                type="email"
                className="border border-gray mt-3 w-[400px] h-10 rounded-lg pl-4 text-sm"
              />
            </div>
            <div>
                Gender : <br />
                <select name="gender" className="select select-bordered border border-gray mt-3 w-[400px] height-10 rounded-lg pl-4 text-sm">
                    <option disabled selected>Choose your gender</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                </select>
            </div>
          </section>
          <section className="flex gap-x-5">
            <div>
              Password : <br />
              <input
                name = "password"
                placeholder="************************"
                type="text"
                className="border border-gray mt-3 w-[400px] h-10 rounded-lg pl-4 text-sm"
              />
            </div>
            <div>
              Confirm Password : <br />
              <input
                placeholder="************************"
                type="text"
                className="border border-gray mt-3 w-[400px] h-10 rounded-lg pl-4 text-sm"
              />
            </div>
          </section>
          <SignUpButtonComponent/>
        </form>
        {/* image */}
        <div>
          <img src="assets/icons/sign-up.svg" className="w-[400px] " alt="" />
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
