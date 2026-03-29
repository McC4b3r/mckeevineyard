"use client";

import { useMemo, useState } from "react";
import { useForm } from "@formspree/react";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [state, handleSubmit] = useForm("contact");
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});

  const errors = useMemo(() => {
    const nextErrors = {};

    if (!values.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!values.lastName.trim()) nextErrors.lastName = "Last name is required.";

    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) nextErrors.message = "Cannot submit a blank message.";

    return nextErrors;
  }, [values]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const onBlur = (event) => {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      message: true,
    });

    if (Object.keys(errors).length > 0) {
      return;
    }

    await handleSubmit(values);
  };

  if (state.succeeded) {
    return (
      <Card className="relative overflow-hidden px-8 py-10">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(88,117,80,0.14),transparent)]" />
        <div className="relative flex min-h-[24rem] flex-col items-center justify-center text-center">
          <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.24em] text-emerald-800">
            Message sent
          </p>
          <p className="mt-4 max-w-md font-[family-name:var(--font-heading)] text-3xl font-semibold text-stone-900">
            Thank you for reaching out.
          </p>
          <p className="mt-4 max-w-md font-[family-name:var(--font-body)] text-lg leading-8 text-stone-700">
            Your message has been received and we&apos;ll follow up as soon as possible.
          </p>
        </div>
      </Card>
    );
  }

  const fieldError = (name) => touched[name] && errors[name];

  return (
    <Card className="relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(88,117,80,0.1),transparent)]" />
      <form className="relative space-y-6" onSubmit={onSubmit}>
        <div className="border-b border-stone-200/80 pb-4">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.22em] text-stone-500">
              Inquiry form
            </p>
            <p className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-semibold text-stone-900">
              Send a Message
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={onChange}
            onBlur={onBlur}
            error={fieldError("firstName")}
          />
          <Field
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={onChange}
            onBlur={onBlur}
            error={fieldError("lastName")}
          />
        </div>
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          onBlur={onBlur}
          error={fieldError("email")}
        />
        <Field
          label="Message"
          name="message"
          as="textarea"
          value={values.message}
          onChange={onChange}
          onBlur={onBlur}
          error={fieldError("message")}
        />
        {state.errors?.length ? (
          <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            There was a problem submitting the form. Please try again.
          </p>
        ) : null}
        <div className="flex justify-center pt-2">
          <Button type="submit" size="lg" disabled={state.submitting} className="min-w-36 rounded-full px-8 shadow-[0_14px_30px_-18px_rgba(67,98,58,0.7)]">
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Card>
  );
}

function Field({ label, name, as, error, ...props }) {
  const Comp = as === "textarea" ? Textarea : Input;

  return (
    <label className="block space-y-2">
      <span className="block font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-stone-600">
        {label}
      </span>
      <Comp
        name={name}
        className="rounded-[1.25rem] border-stone-200 bg-white/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
        {...props}
      />
      {error ? <span className="block text-sm text-red-700">{error}</span> : null}
    </label>
  );
}
