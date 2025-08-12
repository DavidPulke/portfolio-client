import { useFormik, type FormikValues } from "formik";
import { useState, type FunctionComponent } from "react";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { successMsg, errorMsg } from "../services/feedback";
import { sendMessage } from "../services/messages";

interface ContactProps { }

const Contact: FunctionComponent<ContactProps> = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate: NavigateFunction = useNavigate();

    const formik: FormikValues = useFormik<any>({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: yup.object({
            name: yup
                .string()
                .required("Full name is required")
                .min(2, "Full name must be at least 2 characters"),
            email: yup
                .string()
                .required("Email is required")
                .email("Must be a valid email address"),
            subject: yup
                .string()
                .required("Please select a reason for contacting")
                .notOneOf([""], "Please select a reason for contacting"),
            message: yup
                .string()
                .required("Message is required")
                .min(10, "Message must be at least 10 characters"),
        }),
        onSubmit: async (values) => {
            try {
                await sendMessage(values)

                successMsg("Your message has been sent!");
                formik.resetForm();
                navigate('/');
            } catch (error: any) {
                setIsProcessing(false);
                console.error("Error:", error);
                errorMsg(`Error: ${error?.response?.data || error.message}`);
            }
        },
    });

    return (
        <section className="contact-section text-light">
            <h2>Contact Me</h2>
            <p>
                Interested in working together or learning more about what I do?
                Feel free to reach out using the form below.
            </p>

            <form onSubmit={formik.handleSubmit} className="form-container contact-form text-dark">
                {/* Full Name */}
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInputName"
                        placeholder="John Doe"
                        onChange={formik.handleChange}
                        name="name"
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    <label htmlFor="floatingInputName">Full Name *</label>
                    {formik.touched.name && formik.errors.name && (
                        <small className="error">{formik.errors.name}</small>
                    )}
                </div>

                {/* Email */}
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInputEmail"
                        placeholder="johndoe@gmail.com"
                        onChange={formik.handleChange}
                        name="email"
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <label htmlFor="floatingInputEmail">Email *</label>
                    {formik.touched.email && formik.errors.email && (
                        <small className="error">{formik.errors.email}</small>
                    )}
                </div>

                {/* Subject Select */}
                <div className="form-floating mb-3">
                    <select
                        className="form-select"
                        id="floatingSelectSubject"
                        name="subject"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject}
                    >
                        <option value="">Select a reason</option>
                        <option value="job">I'm interested in hiring you</option>
                        <option value="project">I have a project idea</option>
                        <option value="collab">Looking to collaborate</option>
                        <option value="question">I have a question</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="floatingSelectSubject">Reason for Contact *</label>
                    {formik.touched.subject && formik.errors.subject && (
                        <small className="error">{formik.errors.subject}</small>
                    )}
                </div>

                {/* Message */}
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Your Message"
                        id="floatingTextareaMessage"
                        style={{ height: "150px" }}
                        name="message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    ></textarea>
                    <label htmlFor="floatingTextareaMessage">Your Message *</label>
                    {formik.touched.message && formik.errors.message && (
                        <small className="error">{formik.errors.message}</small>
                    )}
                </div>

                <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    disabled={!formik.dirty || !formik.isValid || isProcessing}
                >
                    {isProcessing ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
};

export default Contact;
