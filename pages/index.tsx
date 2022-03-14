import type { NextPage } from "next";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin } from "react-google-login";

const Home: NextPage = () => {
  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
  };

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <div className="grid place-items-center bg-violet-500">
      <div className="h-3/4 w-2/6 bg-white rounded shadow-xl grid place-content-center gap-10">
        <p className="text-xl">Texte login terceiros</p>
        <FacebookLogin
          appId="1088597931155576"
          fields="name,email,picture"
          callback={responseFacebook}
          render={(renderProps: any) => (
            <button
              className="bg-blue-500 text-white p-2 rounded shadow-md"
              onClick={renderProps.onClick}
            >
              Login Facebook
            </button>
          )}
        />
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <button
              className="text-gray-500 p-2 rounded shadow-md"
              onClick={renderProps.onClick}
            >
              Login Google
            </button>
          )}
        />
        ,
      </div>
    </div>
  );
};

export default Home;
