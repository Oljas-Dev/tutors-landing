import { Resend } from "resend";

const apiKey = "re_R74pmp7q_5xAjCmmBxEqQNsDB69FxBRcJ";

const resend = new Resend(apiKey);

export async function sendEmail() {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["medetbaevoljas@gmail.com"],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}

// import { Resend } from "resend";

// export const resend = new Resend("re_UEaKUMKb_NUBrZK3Z4PK6Tsu5s4kACwi8");

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'medetbaevoljas@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });
