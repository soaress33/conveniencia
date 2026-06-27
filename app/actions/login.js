// app/actions/login.js

"use server";


import { redirect } from "next/navigation";

export async function loginUser(user, password) {


  if (user === "admin" && password === "123") {
    redirect("/dashboard");

  }

  return {
    success: false,
    alert: ("Usuário ou senha inválidos"),
  };
}