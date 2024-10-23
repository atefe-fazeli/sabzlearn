import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Button from "../../shared/Form/Button";
import Input from "../../shared/Form/Input";
import Navbar from "../../shared/Navbar/Navbar";
import Topbar from "../../shared/Topbar/Topbar";
import { useForm } from "../../hooks/useForm";

import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../validators/rules";

import "./Login.css";
import axios from "axios";
import { LoginURL } from "../../api/apiRoutes";
import AuthContext from "../../context/authContext";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";
export default function Login() {
  const navigate = useNavigate();
  const [formState, onInputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const authContext = useContext(AuthContext);
  const userLogin = (event) => {
    event.preventDefault();
    const userData = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value,
    };
    axios
      .post(LoginURL, userData)
      .then((res) => {
       
        swal({
          title: "با موفقیت لاگین شدید",
          icon: "success",
          buttons: "ورود به پنل",
        }).then((value) => {
          navigate("/");
        });
        authContext.login(res.data.accessToken,{});
      })
      .catch((error) => {
       
        swal({
          title: "همچین کاربری وجود ندارد",
          icon: "error",
          buttons: "تلاش دوباره",
        });
      });
  };
  const [isGoogleRecaptchaVerify, setIsGoogleRecaptchaVerify] = useState(false)
  
  const onChangeHandler = () => {
    setIsGoogleRecaptchaVerify(true)
  }
  return (
    <>
      <Topbar />
      <Navbar />

      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Link className="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                id="username"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                element="input"
                id="password"
                type="password"
                className="login-form__password-input"
                placeholder="رمز عبور"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />

              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <div className="login-form__password">
              <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChangeHandler} />,
            </div>
            <Button
              className={`login-form__btn ${
                formState.isFormValid  && isGoogleRecaptchaVerify
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type="submit"
              onClick={userLogin}
              disabled={!formState.isFormValid && !isGoogleRecaptchaVerify}
            >
              <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span className="login-form__btn-text">ورود</span>
            </Button>
            <div className="login-form__password-setting">
              <label className="login-form__password-remember">
                <input
                  className="login-form__password-checkbox"
                  type="checkbox"
                />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a className="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
