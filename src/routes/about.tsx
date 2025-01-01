import { About } from "@/pages/About";
import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/about")({
  component: () => (
    <>
      <Helmet>
        <title>Balkalyan Higher Secondary School - About Us</title>
        <meta
          name="description"
          content="Welcome to the homepage of Balkalyan Higher Secondary School, where you can find more about us"
        />
        <meta name="keywords" content="homepage,contact,location,address" />
      </Helmet>
      <About />
    </>
  ),
});
