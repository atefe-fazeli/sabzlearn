import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Input from "../../shared/Form/Input";
import Navbar from "../../shared/Navbar/Navbar";
import Topbar from "../../shared/Topbar/Topbar";

import "./Register.css";

export default function Register() {
  return (
    <>
      <Topbar />
      <Navbar />

      <section class="login-register">
        <div class="login register-form">
          <span class="login__title">ساخت حساب کاربری</span>
          <span class="login__subtitle">خوشحالیم قراره به جمع ما بپیوندی</span>
          <div class="login__new-member">
            <span class="login__new-member-text">قبلا ثبت‌نام کرده‌اید؟ </span>
            <Link class="login__new-member-link" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" class="login-form">
            <div class="login-form__username">
              <Input 
                type="text"
                placeholder="نام کاربری"
                className="login-form__username-input"
                element="input"
              />
              <i class="login-form__username-icon fa fa-user"></i>
            </div>
            <div class="login-form__password">
              <Input 
                type="text"
                placeholder="آدرس ایمیل"
                className="login-form__username-input"
                element="input"
              />
              <i class="login-form__password-icon fa fa-envelope"></i>
            </div>
            <div class="login-form__password">
               <Input 
                type="password"
                placeholder="رمز عبور"
                className="login-form__password-input"
                element="input"
              />
              <i class="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <button class="login-form__btn" type="submit">
              <i class="login-form__btn-icon fa fa-user-plus"></i>
              <span class="login-form__btn-text">عضویت</span>
            </button>
          </form>
          <div class="login__des">
            <span class="login__des-title">سلام کاربر محترم:</span>
            <ul class="login__des-list">
              <li class="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li class="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li class="login__des-item">
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