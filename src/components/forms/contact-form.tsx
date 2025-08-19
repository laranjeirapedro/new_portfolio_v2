"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[^\d]*$/, "Name cannot contain numbers"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});


type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md space-y-4">
      <input
        {...register("name")}
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <input
        {...register("email")}
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <textarea
        {...register("message")}
        placeholder="Your Message"
        className="w-full px-4 py-4 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-y"
        rows={6}
      />
      {errors.message && (
        <p className="text-red-500">{errors.message.message}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
      {isSubmitSuccessful && (
        <p className="text-green-600 mt-2">Message sent successfully!</p>
      )}
    </form>
  );
}
