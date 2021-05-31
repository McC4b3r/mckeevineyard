import React from "react"
import projectID from "../../formspree"
import { FormspreeProvider } from '@formspree/react';
import ContactContent from "../components/ContactContent"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <FormspreeProvider project={projectID}>
        <ContactContent />
      </FormspreeProvider>
    </Layout>
  )
}