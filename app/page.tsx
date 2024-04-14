import Tabs from "@/components/tabs";

import { projects } from "@/config/projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <section>
        <h2 className="font-medium mb-4">Today</h2>
        <p className="opacity-50">
          I am a software engineer [sde 2] at ASSIST Software. I like to build
          software products for clients, and I enjoy the process of turning
          their requirements into functional, user-friendly applications.
          <br />
          <br />
          Previously, I developed a component library, dashboards, and
          accessible pages at Raisis.
        </p>
      </section>
      <section>
        <h2 className="font-medium mb-4">Experiments</h2>
        <Tabs className="-mx-3" tabs={projects} />
      </section>
      <section>
        <h2 className="font-medium mb-4">More</h2>
        <p className="opacity-50">
          You can see more of my career on{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/selimmh"
            className="underline underline-offset-2 decoration-1"
          >
            linkedin
          </a>{" "}
          or more of my code on{" "}
          <a
            target="_blank"
            href="https://github.com/selimmh"
            className="underline underline-offset-2 decoration-1"
          >
            github
          </a>
        </p>
      </section>
    </main>
  );
}
